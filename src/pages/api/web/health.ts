import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    status: 'ok',
    message: 'API is healthy',
    time: new Date().toISOString(),
  });
};

export default handler;