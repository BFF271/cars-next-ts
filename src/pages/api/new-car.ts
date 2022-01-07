import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { v4 as uuid } from 'uuid';

import { Database, delay } from '@shared/utils';
import { NewCarSchema } from '@shared/schemas';
import { CarType } from '@shared/types';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'HTTP method not allowed.' });

  await delay();

  const session = await getSession({ req });

  if (!session || !session.user) {
    return res.status(401).json({ error: 'Unauthorized operation.' });
  }

  const { brand, brandLogo, colors, model, rent, thumbnail } =
    req.body as NewCarSchema;

  if (!brand) {
    return res.status(400).json({ error: 'Brand is required.' });
  }

  if (!brandLogo) {
    return res.status(400).json({ error: 'Brand logo is required.' });
  }

  if (!model) {
    return res.status(400).json({ error: 'Model is required.' });
  }

  if (!thumbnail) {
    return res.status(400).json({ error: 'Thumbnail is required.' });
  }

  if (colors.length === 0) {
    return res
      .status(400)
      .json({ error: 'The car must have at least onde color.' });
  }

  if (rent.price < 0) {
    return res
      .status(400)
      .json({ error: 'Rent price must be a positive number.' });
  }

  if (rent.price < 5) {
    return res
      .status(400)
      .json({ error: 'Rent price must be greater than or equals to $5.00.' });
  }

  if (!['day', 'month', 'year'].includes(rent.period)) {
    return res.status(400).json({ error: 'Invalid rent period.' });
  }

  const cars = await Database.getDatabaseFileData<CarType[]>('cars.json');
  const newCar: CarType = {
    id: uuid(),
    brand,
    brandLogo,
    colors,
    model,
    rent,
    thumbnail,
  };

  const updatedCars = [...cars, newCar];

  try {
    await Database.saveToDatabase('cars.json', updatedCars);
    return res
      .status(200)
      .json({ message: 'Car created.', newCarId: newCar.id });
  } catch {
    return res.status(500).json({ error: 'Error saving user data.' });
  }
}

export default handler;
