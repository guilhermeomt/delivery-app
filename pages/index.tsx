import { Categories, Highlights, Foods, PageTemplate } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageTemplate
      title="Home"
      description="Página inicial do Nibble Restaurantes"
    >
      <Categories />
      <Highlights />
      <Foods />
    </PageTemplate>
  );
};

export default Home;
