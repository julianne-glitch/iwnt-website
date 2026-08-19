import 'dotenv/config'
import prisma from '../lib/prisma'
import { hash } from 'bcrypt-ts'

async function main() {
  const email = process.env.INITIAL_ADMIN_EMAIL;
  const password = process.env.INITIAL_ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error('INITIAL_ADMIN_EMAIL and INITIAL_ADMIN_PASSWORD must be provided in the environment to seed the admin user.');
  }

  const passwordHash = await hash(password, 10);
  
  const admin = await prisma.adminUser.upsert({
    where: { email },
    update: {},
    create: {
      email,
      passwordHash,
    },
  });
  
  console.log('Successfully seeded admin user:', admin.email);
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
