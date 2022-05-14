import { GetServerSideProps } from "next";
import { Foods, Navbar, PageHead, Sidebar, ItemDetails } from "@/components";
import Styles from "./restaurant.module.css";
import { RestaurantProps } from "./types";

export default function Restaurant({ id }: RestaurantProps) {
  return (
    <>
      <PageHead
        title="Restaurante"
        description="Página de restaurante do Nibble Restaurantes"
      />
      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          <div>[imagem]</div>
          <div className={Styles.header}>
            <div className={Styles.details}>
              <h1>Burger King</h1>
              <p>
                It is one of the most iconic and well-recognizable fast food
                restaurants out there which offers really amazing food and
                drinks.
              </p>
            </div>
            <div className={Styles.tags}>
              <span>Entrega grátis</span>
              <span>Compre 1 leve 2</span>
              <span>Abre às 12h</span>
            </div>
          </div>
          <div className="mb-12">
            <ItemDetails
              rating={4.7}
              reviews={202}
              category={"Hambúguer"}
              price={1}
              distance={"4,3 km (Irving St, San Francisco, California)"}
            />
          </div>
          <Foods />
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
