import * as z from 'zod';

export const registrationSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required.')
    .email({ message: 'Invalid email address.' }),
  name: z.string().nonempty('Name is required.'),
  password: z
    .string()
    .nonempty('Password is required.')
    .min(8, { message: 'Password must be at least 8 characters long.' }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
