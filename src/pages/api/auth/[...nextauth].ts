import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import path from 'path';
import fs from 'fs';

import { comparePasswords } from '@shared/utils';
import { UserType } from '@shared/types';

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.SECRET,
  },
  providers: [
    CredentialsProvider({
      name: 'Exotic Cars',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Invalid credentials.');
        }

        const { email, password } = credentials;

        const usersDatabasePath = path.join(
          process.cwd(),
          'database',
          'users.json'
        );
        const fileContent = fs.readFileSync(
          usersDatabasePath
        ) as unknown as string;
        const users: UserType[] = fileContent ? JSON.parse(fileContent) : [];

        const user = users.find((user) => user.email === email);

        if (!user) {
          throw new Error('User not found.');
        }

        const isPasswordValid = await comparePasswords(password, user.password);

        if (!isPasswordValid) {
          throw new Error('Passwords do not match.');
        }

        return user;
      },
    }),
  ],
});
