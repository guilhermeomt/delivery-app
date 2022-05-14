import { Highlights, Foods, PageTemplate } from "@/components";
import type { NextPage } from "next";

const Explore: NextPage = () => {
  return (
    <PageTemplate
      title="Explorar Restaurantes"
      description="Veja as os melhores restaurantes do Nibble!"
    >
      <Highlights title="Restaurantes próximos" />
      <Foods />
    </PageTemplate>
  );
};

export default Explore;
