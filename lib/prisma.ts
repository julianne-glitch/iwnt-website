import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

let connectionString = `${process.env.DATABASE_URL}`

// If using prisma+postgres local dev URL, extract the actual postgres URL for the pg driver
if (connectionString.startsWith('prisma+postgres://')) {
  try {
    const parsed = new URL(connectionString)
    const apiKey = parsed.searchParams.get('api_key')
    if (apiKey) {
      const decoded = JSON.parse(Buffer.from(apiKey, 'base64').toString('utf-8'))
      if (decoded.databaseUrl) {
        connectionString = decoded.databaseUrl
      }
    }
  } catch (e) {
    console.error('Failed to parse prisma+postgres URL', e)
  }
}

const prismaClientSingleton = () => {
  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
