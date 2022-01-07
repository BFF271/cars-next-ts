import * as z from 'zod';

export const authenticationSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required.')
    .email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .nonempty('Password is required.')
    .min(8, { message: 'Password must be at least 8 characters long.' }),
});

export type AuthenticationSchema = z.infer<typeof authenticationSchema>;
