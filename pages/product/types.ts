export type ProductProps = {
  id: string;
  product: {
    id: string;
    name: string;
    imageUrl: string;
    deliveryFee: string;
    rating: number;
    reviews: number;
    category: string;
    deliveryTime: string;
  };
};
