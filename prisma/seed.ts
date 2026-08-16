import 'dotenv/config'
import prisma from '../lib/prisma'
import { hash } from 'bcrypt-ts'

async function main() {
  const passwordHash = await hash('password123', 10)
  
  const admin = await prisma.adminUser.upsert({
    where: { email: 'admin@iwnt.com' },
    update: {},
    create: {
      email: 'admin@iwnt.com',
      passwordHash,
    },
  })
  
  console.log({ admin })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
