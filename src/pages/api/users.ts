import type { NextApiRequest, NextApiResponse } from 'next';
import { UserModel } from '@/resources/user';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/options';

const prisma = new PrismaClient();

type ResponseData = {
  data: UserModel[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const session = await getServerSession(req, res, authOptions);
  if (req.method !== 'POST' || !session) {
    res.status(403).send();
    return;
  } else {
    const users: UserModel[] = await prisma.user.findMany();

    res.status(200).json({
      data: users,
    });
  }
};

export default handler;
