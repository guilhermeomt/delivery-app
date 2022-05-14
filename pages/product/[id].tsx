import { FoodItem, PageTemplate } from "@/components";
import { GetServerSideProps } from "next";
import { ProductProps } from "./types";

export default function Product({ id, product }: ProductProps) {
  return (
    <PageTemplate
      title={`${product.name} - Restaurante XPTO`}
      description={`Descrição do ${product.name} no Restaurante XPTO`}
    >
      <FoodItem {...product} />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
      product: {
        id: params?.id,
        name: "Gigantic Rodeo Burger",
        imageUrl: "/foods/burger.jpg",
        deliveryFee: "Entrega grátis",
        rating: 4.6,
        reviews: 77,
        category: "Hambúrguer",
        deliveryTime: "30 min - 45 min",
      },
    },
  };
};
