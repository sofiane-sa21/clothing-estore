export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collection = {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
};
