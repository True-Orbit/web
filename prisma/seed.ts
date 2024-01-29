import { PrismaClient } from '@prisma/client';
import { user } from './seeds';

const prisma = new PrismaClient();

const main = async () => {
  user.seed(prisma);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
