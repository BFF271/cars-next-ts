import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { comparePasswords, Database, delay } from '@shared/utils';
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

        await delay();

        const users =
          (await Database.getDatabaseFileData<UserType[]>('users.json')) || [];
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
