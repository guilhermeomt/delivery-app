import { Highlights, Navbar, PageHead, Sidebar } from "@/components";
import { GetServerSideProps } from "next";
import { CategoriesProps } from "./types";

export default function Categories({ id }: CategoriesProps) {
  return (
    <>
      <PageHead
        title="Categorias"
        description="Página de categorias do Nibble Restaurantes"
      />
      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          <Highlights />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};
