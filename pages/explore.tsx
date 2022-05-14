import { Highlights, Navbar, PageHead, Foods, Sidebar } from "@/components";
import type { NextPage } from "next";

const Explore: NextPage = () => {
  return (
    <>
      <PageHead
        title="Explorar Restaurantes"
        description="Veja as os melhores restaurantes do Nibble!"
      />
      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          <Highlights title="Restaurantes próximos" />
          <Foods />
        </div>
      </div>
    </>
  );
};

export default Explore;
