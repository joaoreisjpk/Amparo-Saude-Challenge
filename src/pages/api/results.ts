import type { NextApiRequest, NextApiResponse } from 'next';

import { resultProps } from '../../interfaces';

let results: resultProps[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const newResults: resultProps = JSON.parse(req.body);

    results.push(newResults);

    res.status(201).json(results);
  } else if (req.method === 'DELETE') {
    const { id }: { id: string } = JSON.parse(req.body);
    console.log(id);
    results = results.filter((item) => item.id !== id);
    console.log(results);
    res.status(201).json(results);
  } else {
    res.status(200).json(results);
  }
}
