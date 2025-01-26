import { NextApiRequest, NextApiResponse } from 'next';

const health = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  res.status(200).json({ status: 'ok', message: 'API is healthy', time: new Date().toISOString() });
};

export default health;
