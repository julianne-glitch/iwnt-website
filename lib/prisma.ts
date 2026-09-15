import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim());
}

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL?.trim() || "";

  if (connectionString.startsWith("prisma+postgres://")) {
    return new PrismaClient({ accelerateUrl: connectionString });
  }

  const pool = new Pool({
    connectionString: connectionString || undefined,
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
