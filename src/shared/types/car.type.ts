type RentType = {
  price: number;
  period: string;
};

type ColorType = {
  color: string;
  image: string;
};

export type CarType = {
  id: string;
  brand: string;
  brandLogo: string;
  model: string;
  thumbnail: string;
  rent: RentType;
  colors: ColorType[];
};
