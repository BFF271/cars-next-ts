import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button, FormGroup, Loader } from '@components';

import * as S from '@pageStyles/NewCar';

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

const newCarSchema = z.object({
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
  colors: z.array(carColorSchema),
});

type NewCarSchema = z.infer<typeof newCarSchema>;

const NewCarPage: React.FC = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<NewCarSchema>({
    resolver: zodResolver(newCarSchema),
    defaultValues: {
      brand: '',
      brandLogo: '',
      model: '',
      thumbnail: '',
      rent: { period: 'day', price: 0 },
      colors: [{ color: '', image: '' }],
    },
  });

  const { fields } = useFieldArray({ name: 'colors', control });

  async function handleCreateNewCar() {
    alert('Create new cart');
  }

  return (
    <S.Container>
      <S.Content>
        <Head>
          <title>New car | Exotic Cars</title>
          <meta name="description" content="Publish a new car rent." />
        </Head>

        <S.FormSide onSubmit={handleSubmit(handleCreateNewCar)}>
          <S.Title>New Car</S.Title>

          <FormGroup
            title="Brand"
            inputId="brand"
            inputType="text"
            placeholder="Ex.: Chevrolet"
            formRegistration={register('brand')}
            error={errors.brand}
          />

          <FormGroup
            title="Brand logo"
            inputId="brand-logo"
            inputType="text"
            placeholder="https://"
            formRegistration={register('brandLogo')}
            error={errors.brandLogo}
          />

          <FormGroup
            title="Model"
            inputId="model"
            inputType="text"
            placeholder="Ex.: Camaro"
            formRegistration={register('model')}
            error={errors.model}
          />

          <FormGroup
            title="Thumbnail"
            inputId="thumbnail"
            inputType="text"
            placeholder="https://"
            formRegistration={register('thumbnail')}
            error={errors.thumbnail}
          />

          <S.FormRow>
            <FormGroup
              title="Rent price"
              inputId="rent-price"
              inputType="number"
              placeholder="0"
              formRegistration={register('rent.price')}
              error={errors.rent?.price}
            />

            <FormGroup
              title="Rent period"
              inputId="rent-period"
              inputType="text"
              formRegistration={register('rent.period')}
              error={errors.rent?.period}
            />
          </S.FormRow>

          {fields.map((field, index) => (
            <S.FormRow key={field.id}>
              <FormGroup
                title="Color"
                inputId="car-color"
                inputType="text"
                placeholder="Ex.: Black"
                formRegistration={register(`colors.${index}.color`)}
                error={errors.colors?.[index].color}
              />

              <FormGroup
                title="Car color image"
                inputId="car-color-image"
                inputType="text"
                placeholder="https://"
                formRegistration={register(`colors.${index}.image`)}
                error={errors.colors?.[index]?.image}
              />
            </S.FormRow>
          ))}

          <S.ButtonContainer>
            <Button disabled={isSubmitting}>
              {isSubmitting ? <Loader /> : 'Add'}
            </Button>
          </S.ButtonContainer>
        </S.FormSide>

        <S.BannerContainer>
          <S.Banner
            src="/images/new-car-banner.png"
            alt="New car banner"
            layout="fill"
          />
        </S.BannerContainer>
      </S.Content>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default NewCarPage;
