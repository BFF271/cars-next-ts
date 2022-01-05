import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import path from 'path';
import fs from 'fs';

import { delay, hashPassword, isEmailValid } from '@shared/utils';
import { UserType } from '@shared/types';

type RequestBodyType = {
  email: string;
  name: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'HTTP method not allowed.' });

  await delay();

  const { email, name, password } = req.body as RequestBodyType;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  if (!isEmailValid(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  if (!password) {
    return res.status(400).json({ error: 'Password is required.' });
  }

  const usersDatabasePath = path.join(process.cwd(), 'database', 'users.json');

  let fileContent = '';

  try {
    fileContent = fs.readFileSync(usersDatabasePath) as unknown as string;
  } catch {
    return res.status(500).json({ error: 'Database error, try again soon.' });
  }

  const users: UserType[] = fileContent ? JSON.parse(fileContent) : [];

  const isEmailExistent = users.find((user) => user.email === email);

  if (isEmailExistent) {
    return res.status(400).json({ error: 'Email is already in use.' });
  }

  const hashedPassword = await hashPassword(password);

  const newUser: UserType = {
    id: uuid(),
    name,
    email,
    password: hashedPassword,
  };

  try {
    fs.writeFileSync(usersDatabasePath, JSON.stringify([...users, newUser]));
  } catch {
    return res.status(500).json({ error: 'Error saving new user.' });
  }

  return res.status(200).json({ message: 'Registered user.' });
}

export default handler;
