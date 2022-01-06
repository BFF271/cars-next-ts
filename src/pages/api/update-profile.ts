import { NextApiRequest, NextApiResponse } from 'next';

import { Database, delay, isEmailValid } from '@shared/utils';
import { UserType } from '@shared/types';
import { getSession } from 'next-auth/react';

type RequestBodyType = {
  email: string;
  name: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH')
    return res.status(405).json({ error: 'HTTP method not allowed.' });

  await delay();

  const session = await getSession({ req });

  if (!session || !session.user) {
    return res.status(401).json({ error: 'Unauthorized operation.' });
  }

  const { email: newEmail, name: newName } = req.body as RequestBodyType;

  if (!newEmail) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  if (!isEmailValid(newEmail)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  if (!newName) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  const { email: sessionEmail } = session.user;

  const users = await Database.getDatabaseFileData<UserType[]>('users.json');
  const userByEmail = users.find((user) => user.email === sessionEmail);

  if (!userByEmail) {
    return res.status(404).json({ error: 'User not found.' });
  }

  if (newEmail !== sessionEmail) {
    const newEmailIsAlreadyInUser = users.find(
      (user) => user.email === newEmail
    );

    if (newEmailIsAlreadyInUser) {
      return res.status(400).json({ error: 'Email is already in use.' });
    }
  }

  const updatedUsers = users.map((user) => {
    if (user.email === sessionEmail) {
      return {
        ...user,
        email: newEmail,
        name: newName,
      };
    }

    return user;
  });

  try {
    await Database.saveToDatabase('users.json', updatedUsers);
    return res
      .status(200)
      .json({ message: 'User data has been saved, please sign in again.' });
  } catch {
    return res.status(500).json({ error: 'Error saving user data.' });
  }
}

export default handler;
