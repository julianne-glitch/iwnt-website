"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { contactSchema, ContactFormData } from "@/lib/schemas";
import { sendNewEnquiryNotifications } from "@/app/actions/email";

export async function submitContactEnquiry(data: ContactFormData) {
  try {
    // 1. Validate data on the server
    const parsed = contactSchema.parse(data);

    // 2. Save to database
    const enquiry = await prisma.enquiry.create({
      data: {
        fullName: parsed.fullName,
        workEmail: parsed.workEmail,
        company: parsed.company || "",
        countryRegion: parsed.countryRegion,
        helpTopic: parsed.helpTopic,
        message: parsed.message,
      },
    });

    // 3. Trigger email notification
    await sendNewEnquiryNotifications(enquiry);

    return { success: true, id: enquiry.id };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed" };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function updateEnquiryStatus(id: string, status: "NEW" | "IN_PROGRESS" | "RESOLVED") {
  try {
    await prisma.enquiry.update({
      where: { id },
      data: { status },
    });
    
    revalidatePath("/admin/enquiries");
    revalidatePath(`/admin/enquiries/${id}`);
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error updating enquiry status:", error);
    return { success: false, error: "Failed to update status" };
  }
}