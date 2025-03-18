import type { NextApiRequest, NextApiResponse } from 'next';
import { api } from "@/resources/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await api.logout();
  } catch (error) {
    console.error('Logout error:', error);
  }
  res.redirect(302, '/feed');
};

export default handler;
