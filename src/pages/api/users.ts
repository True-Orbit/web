import type { NextApiRequest, NextApiResponse } from 'next';
import { MODELS as USER_MODELS } from '@/resources/users';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/options';

type ResponseData = {
  data: USER_MODELS.User[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData | string>) => {
  const session = await getServerSession(req, res, authOptions);
  if (req.method !== 'POST' || !session) {
    res.status(403).send('Forbidden');
    return;
  } else {
    const users: USER_MODELS.User[] = [];

    res.status(200).json({
      data: users,
    });
  }
};

export default handler;
