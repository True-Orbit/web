import type { NextApiRequest, NextApiResponse } from 'next';
import { UserModel } from '@/resources/user';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ResponseData = {
  data: UserModel[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const users: UserModel[] = await prisma.user.findMany();

  res.status(200).json({
    data: users,
  });
};

export default handler;
