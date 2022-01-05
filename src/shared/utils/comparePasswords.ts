import { compare } from 'bcryptjs';

export async function comparePasswords(
  password: string,
  hashedPassword: string
) {
  const isPasswordValid = await compare(password, hashedPassword);
  return isPasswordValid;
}
