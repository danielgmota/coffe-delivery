import { Catalog } from "../../components/catalog";
import { ICatalogProps } from "../../components/catalog/Catalog.types";
import { Layout } from "../../components/layout";
import { Catalogs, HomeTitle } from "./Home.styles";
import { Banner } from "./components/banner";

export function Home() {
  const catalogsMocked: ICatalogProps[] = [
    {
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "3,90",
      tags: ["Tradicional"],
      coffeType: "tradicional",
    },
    {
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "2,90",
      tags: ["Tradicional"],
      coffeType: "americano",
    },
    {
      title: "Expresso cremosos",
      description: "Café expresso tradicional com espuma cremosa",
      price: "4,90",
      tags: ["Tradicional"],
      coffeType: "expresso-cremoso",
    },
    {
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: "3,90",
      tags: ["Tradicional", "Gelado"],
      coffeType: "cafe-gelado",
    },
    {
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: "5,90",
      tags: ["Tradicional", "Com leite"],
      coffeType: "cafe-com-leite",
    },
    {
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: "6,90",
      tags: ["Tradicional", "Com leite"],
      coffeType: "latte",
    },
    {
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: "7,90",
      tags: ["Tradicional", "Com leite"],
      coffeType: "capuccino",
    },
    {
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: "7,90",
      tags: ["Tradicional", "Com leite"],
      coffeType: "macchiato",
    },
    {
      title: "Mochaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: "8,90",
      tags: ["Tradicional", "Com leite"],
      coffeType: "mochaccino",
    },
    {
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "7,90",
      tags: ["Especial", "Com leite"],
      coffeType: "chocolate-quente",
    },
    {
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "12,90",
      tags: ["Especial", "Alcoólico", "Gelado"],
      coffeType: "cubano",
    },
    {
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "9,90",
      tags: ["Especial"],
      coffeType: "havaiano",
    },
    {
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: "7,90",
      tags: ["Especial"],
      coffeType: "arabe",
    },
    {
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "8,90",
      tags: ["Especial", "Alcoólico"],
      coffeType: "irlandes",
    },
  ];

  return (
    <>
      <Layout outside={<Banner />}>
        <HomeTitle>Nossos cafés</HomeTitle>
        <Catalogs>
          {catalogsMocked.map((catalog) => (
            <Catalog
              title={catalog.title}
              description={catalog.description}
              price={catalog.price}
              tags={catalog.tags}
              coffeType={catalog.coffeType}
            />
          ))}
        </Catalogs>
      </Layout>
    </>
  );
}
