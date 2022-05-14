import { Highlights, PageTemplate } from "@/components";
import { GetServerSideProps } from "next";
import { CategoriesProps } from "./types";

export default function Categories({ id }: CategoriesProps) {
  return (
    <PageTemplate
      title={`${id} - Categorias`}
      description="Página de categorias do Nibble Restaurantes"
    >
      <Highlights title="Restaurantes mais próximos" />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};
