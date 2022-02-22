// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const prices = {
  '011': {
    '016': 1.9,
    '017': 1.7,
    '018': 0.9,
  },
  '016': {
    '011': 2.9,
  },
  '017': {
    '011': 2.7,
  },
  '018': {
    '011': 1.9,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(prices);
}
