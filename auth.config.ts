import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  providers: [],
  pages: {
    signIn: '/admin/login',
  },
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      
      if (isOnAdmin) {
        if (nextUrl.pathname === '/admin/login') {
          if (isLoggedIn) return Response.redirect(new URL('/admin', nextUrl));
          return true;
        }
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname === '/admin/login') {
        return Response.redirect(new URL('/admin', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig
