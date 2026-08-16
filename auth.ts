import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import { compare } from "bcrypt-ts"
import prisma from "@/lib/prisma"
import { authConfig } from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await prisma.adminUser.findUnique({ where: { email } })
          if (!user) return null

          const passwordsMatch = await compare(password, user.passwordHash)

          if (passwordsMatch) return { id: user.id, email: user.email }
        }

        return null
      },
    }),
  ],
})
