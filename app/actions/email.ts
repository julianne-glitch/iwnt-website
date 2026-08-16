"use server";

import nodemailer from "nodemailer";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: parseInt(process.env.SMTP_PORT || "465") === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEnquiryReply(enquiryId: string, message: string) {
  try {
    // 1. Fetch the enquiry details
    const enquiry = await prisma.enquiry.findUnique({
      where: { id: enquiryId },
    });

    if (!enquiry) {
      return { success: false, error: "Enquiry not found" };
    }

    // 2. Send the email
    const info = await transporter.sendMail({
      from: `"IWNT Support" <${process.env.SMTP_USER}>`, // sender address
      to: enquiry.workEmail, // list of receivers
      subject: `Re: Your Enquiry to IWNT - ${enquiry.helpTopic}`, // Subject line
      text: message, // plain text body
      html: `<div style="font-family: sans-serif; color: #333; line-height: 1.6;">
               <p>Hi ${enquiry.fullName},</p>
               <p style="white-space: pre-wrap;">${message}</p>
               <br/>
               <hr style="border: none; border-top: 1px solid #eee;" />
               <p style="font-size: 0.9em; color: #666;">
                 <b>Your original message:</b><br/>
                 ${enquiry.message}
               </p>
             </div>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    // 3. Update the enquiry status to REPLIED
    await prisma.enquiry.update({
      where: { id: enquiryId },
      data: { status: "REPLIED" },
    });

    // 4. Revalidate paths
    revalidatePath("/admin/enquiries");
    revalidatePath(`/admin/enquiries/${enquiryId}`);
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Failed to send email reply:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendNewEnquiryNotifications(enquiry: {
  id: string;
  fullName: string;
  workEmail: string;
  company: string;
  countryRegion: string;
  helpTopic: string;
  message: string;
}) {
  try {
    // 1. Send Automatic Professional Reply to the User
    await transporter.sendMail({
      from: `"IWNT Support" <${process.env.SMTP_USER}>`,
      to: enquiry.workEmail,
      subject: `Thank you for contacting IWNT`,
      text: `Hi ${enquiry.fullName},\n\nThank you for reaching out to IWNT regarding "${enquiry.helpTopic}".\n\nWe have received your enquiry and our team will review it and get back to you shortly.\n\nBest regards,\nThe IWNT Team`,
      html: `<div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
               <div style="text-align: center; margin-bottom: 20px;">
                 <h2 style="color: #020617; margin: 0;">IWNT</h2>
               </div>
               <p style="font-size: 16px;">Hi <b>${enquiry.fullName}</b>,</p>
               <p style="font-size: 16px;">Thank you for reaching out to us regarding <b>${enquiry.helpTopic}</b>.</p>
               <p style="font-size: 16px;">We have successfully received your enquiry. Our team is currently reviewing it and will get back to you as soon as possible.</p>
               <br/>
               <p style="font-size: 16px; color: #475569;">Best regards,<br/><strong>The IWNT Team</strong></p>
               <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
               <p style="font-size: 12px; color: #94a3b8; text-align: center;">
                 Please do not reply to this automated email.
               </p>
             </div>`,
    });

    // 2. Send Notification to the Admin
    await transporter.sendMail({
      from: `"IWNT System" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to the admin's email
      subject: `New Enquiry from ${enquiry.fullName} - ${enquiry.helpTopic}`,
      text: `A new enquiry has been submitted on the IWNT website.\n\nFrom: ${enquiry.fullName} (${enquiry.workEmail})\nCompany: ${enquiry.company}\nLocation: ${enquiry.countryRegion}\nTopic: ${enquiry.helpTopic}\n\nMessage:\n${enquiry.message}`,
      html: `<div style="font-family: sans-serif; color: #333; line-height: 1.6;">
               <h2 style="color: #020617;">New Enquiry Received</h2>
               <p>A new enquiry has been submitted on the website.</p>
               <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                 <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${enquiry.fullName}</td></tr>
                 <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${enquiry.workEmail}</td></tr>
                 <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${enquiry.company || "N/A"}</td></tr>
                 <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Location:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${enquiry.countryRegion}</td></tr>
                 <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Topic:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${enquiry.helpTopic}</td></tr>
               </table>
               <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                 <h4 style="margin-top: 0; color: #475569;">Message:</h4>
                 <p style="white-space: pre-wrap; margin-bottom: 0;">${enquiry.message}</p>
               </div>
               <p style="margin-top: 20px;">
                 <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/admin/enquiries/${enquiry.id}" style="background: #2563eb; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">View in Dashboard</a>
               </p>
             </div>`,
    });

  } catch (error) {
    console.error("Failed to send new enquiry notifications:", error);
    // We don't want to break the user flow if email fails, so we just log it.
  }
}
