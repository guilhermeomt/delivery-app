import {
  Categories,
  // Highlights,
  Navbar,
  PageHead,
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
          {/* <Highlights /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
