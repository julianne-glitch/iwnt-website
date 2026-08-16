"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/actions/auth";

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
          <p className="text-sm text-slate-500 mt-2">Sign in to manage the IWNT portal</p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="admin@iwnt.com"
              required
              className="w-full px-4 py-3 mt-1 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 mt-1 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
            />
          </div>

          {errorMessage && (
            <div className="text-sm text-red-500 text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full px-4 py-3 text-white bg-green-600 rounded-xl hover:bg-green-700 disabled:opacity-50 transition-colors font-semibold"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
