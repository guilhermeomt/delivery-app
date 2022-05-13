import {
  Categories,
  Highlights,
  Navbar,
  PageHead,
  Foods,
  Sidebar,
} from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <PageHead
        title="Home"
        description="Página inicial do Nibble Restaurantes"
      />
      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          <Categories />
          <Highlights />
          <Foods />
        </div>
      </div>
    </>
  );
};

export default Home;
