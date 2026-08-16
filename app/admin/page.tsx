import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboard() {
  const articlesCount = await prisma.article.count();
  const enquiriesCount = await prisma.enquiry.count();
  const newEnquiriesCount = await prisma.enquiry.count({
    where: { status: "NEW" },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Articles Stat Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-slate-500 font-medium text-sm">Total Articles</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">{articlesCount}</p>
          </div>
          <Link href="/admin/articles" className="text-green-600 hover:text-green-700 text-sm font-medium mt-4 inline-flex items-center gap-1">
            Manage Articles →
          </Link>
        </div>

        {/* Enquiries Stat Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-slate-500 font-medium text-sm">Total Enquiries</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">{enquiriesCount}</p>
            {newEnquiriesCount > 0 && (
              <p className="text-sm text-amber-600 font-medium mt-1">
                {newEnquiriesCount} new
              </p>
            )}
          </div>
          <Link href="/admin/enquiries" className="text-green-600 hover:text-green-700 text-sm font-medium mt-4 inline-flex items-center gap-1">
            View Enquiries →
          </Link>
        </div>
      </div>
    </div>
  );
}
