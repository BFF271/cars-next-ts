import * as z from 'zod';

const rentSchema = z.object({
  price: z.number().positive({ message: 'Only positive numbers.' }).gte(5, {
    message: 'Rent price must be greater than or equals to $5.00.',
  }),
  period: z.enum(['day', 'month', 'year']),
});

const carColorSchema = z.object({
  color: z.string().nonempty({ message: 'Color is required.' }),
  image: z
    .string()
    .nonempty({ message: 'Car color image is required.' })
    .url({ message: 'Invalid car color image URL address.' }),
});

export const newCarSchema = z.object({
  brand: z.string().nonempty('Brand is required.'),
  brandLogo: z
    .string()
    .nonempty('Brand logo is required.')
    .url({ message: 'Invalid brand logo URL address.' }),
  model: z.string().nonempty('Model is required.'),
  thumbnail: z
    .string()
    .nonempty('Thumbnail is required.')
    .url({ message: 'Invalid thumbnail URL address.' }),
  rent: rentSchema,
  colors: z
    .array(carColorSchema)
    .nonempty({ message: 'The car must have at least onde color.' }),
});

export type NewCarSchema = z.infer<typeof newCarSchema>;
