import { Catalog } from "../../components/catalog";
import { Layout } from "../../components/layout";
import { Catalogs, HomeTitle } from "./Home.styles";
import { Banner } from "./components/banner";

export function Home() {
  return (
    <>
      <Layout outside={<Banner />}>
        <HomeTitle>Nossos cafés</HomeTitle>
        <Catalogs>
          <Catalog
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="tradicional"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="2,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso cremosos"
            description="Café expresso tradicional com espuma cremosa"
            price="4,00"
            tags={["Tradicional"]}
            coffeType="expresso-cremoso"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
          <Catalog
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="3,00"
            tags={["Tradicional"]}
            coffeType="americano"
          />
        </Catalogs>
      </Layout>
    </>
  );
}
