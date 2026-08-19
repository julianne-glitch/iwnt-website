import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = `${process.env.DATABASE_URL}`

const prismaClientSingleton = () => {
  if (connectionString.startsWith('prisma+postgres://')) {
    // Prisma Postgres uses Accelerate via the URL, no driver adapter needed
    return new PrismaClient({ accelerateUrl: connectionString })
  } else {
    // Standard direct postgres connection
    const pool = new Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    return new PrismaClient({ adapter })
  }
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
