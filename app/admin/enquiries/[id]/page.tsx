import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { updateEnquiryStatus } from "@/app/actions/contact";
import ReplyForm from "./ReplyForm";

export const dynamic = "force-dynamic";

export default async function EnquiryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const enquiry = await prisma.enquiry.findUnique({
    where: { id },
  });

  if (!enquiry) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Enquiry Details</h1>
        
        <form action={async () => {
          "use server";
          await updateEnquiryStatus(enquiry.id, "RESOLVED");
        }}>
          <button
            type="submit"
            disabled={enquiry.status === "RESOLVED"}
            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Mark as Resolved
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
        <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">From</h3>
            <p className="text-base font-semibold text-slate-900">{enquiry.fullName}</p>
            <p className="text-sm text-slate-600">{enquiry.workEmail}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">Company</h3>
            <p className="text-base text-slate-900">{enquiry.company || "N/A"}</p>
            <p className="text-sm text-slate-600">{enquiry.countryRegion}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">Topic</h3>
            <p className="text-base text-slate-900">{enquiry.helpTopic}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">Submitted On</h3>
            <p className="text-base text-slate-900">{format(new Date(enquiry.createdAt), "PPP 'at' p")}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-500 mb-3">Message</h3>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <p className="text-slate-800 whitespace-pre-wrap">{enquiry.message}</p>
          </div>
        </div>
      </div>

      <ReplyForm enquiryId={enquiry.id} status={enquiry.status} />
    </div>
  );
}
