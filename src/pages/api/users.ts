import type { NextApiRequest, NextApiResponse } from 'next';
import { UserModel } from '@/resources/user';

type ResponseData = {
  data: { [key: string]: UserModel };
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

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({
    data: {
      [fakeUser.id]: fakeUser,
    },
  });
}
