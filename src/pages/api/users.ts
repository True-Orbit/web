import type { NextApiRequest, NextApiResponse } from 'next';
import { UserModel } from '@/resources/user';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ResponseData = {
  data: UserModel[];
};

const fakeUser: UserModel = {
  id: '1',
  email: 'fakeUser@example.com',
  firstName: 'Leanne',
  lastName: 'Graham',
  profileUrl: 'some-url',
  handle: 'Gripes',
  avatar: 'some-avatar',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const users: UserModel[] = await prisma.user.findMany();

  res.status(200).json({
    data: users,
  });
}

export default handler;
