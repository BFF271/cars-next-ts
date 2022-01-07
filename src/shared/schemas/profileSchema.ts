import * as z from 'zod';

export const profileSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required.')
    .email({ message: 'Invalid email address.' }),
  name: z.string().nonempty('Name is required.'),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
