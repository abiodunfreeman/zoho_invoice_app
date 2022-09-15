import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  brand: string;
  model: string;
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ brand: 'Mercedes', model: 'X1', url: 'url.com' });
}
