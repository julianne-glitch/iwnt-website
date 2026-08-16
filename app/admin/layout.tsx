import { ReactNode } from "react";
import Link from "next/link";
import { auth, signOut } from "@/auth";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  // If there's no session, we just return children (e.g. for login page)
  if (!session?.user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Link href="/admin" className="text-xl font-bold text-white tracking-tight">
            IWNT Admin
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/admin"
            className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/articles"
            className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/admin/enquiries"
            className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Enquiries
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="w-full text-left px-4 py-3 text-slate-400 hover:text-white transition-colors text-sm"
            >
              Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shadow-sm">
          <h2 className="text-lg font-medium text-slate-800">
            Welcome, {session.user.email}
          </h2>
        </header>
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
