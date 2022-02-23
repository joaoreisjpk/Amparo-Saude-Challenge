// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const prices = [
  {
    id: 1,
    origem: '011',
    destino: '016',
    price: 1.9,
  },
  {
    id: 2,
    origem: '011',
    destino: '017',
    price: 1.7,
  },
  {
    id: 3,
    origem: '011',
    destino: '018',
    price: 0.9,
  },
  {
    id: 5,
    origem: '016',
    destino: '011',
    price: 2.9,
  },
  {
    id: 6,
    origem: '017',
    destino: '011',
    price: 2.7,
  },
  {
    id: 7,
    origem: '018',
    destino: '011',
    price: 1.9,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(prices);
}
