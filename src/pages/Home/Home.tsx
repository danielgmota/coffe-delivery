import {
  Bank,
  CreditCard,
  Money,
  ShoppingCartSimple,
  Trash,
} from "phosphor-react";
import { Button } from "../../components/button";
import { Cart } from "../../components/cart";
import { Select } from "../../components/select/Select";
import { Input } from "../../components/input";
import { InputNumber } from "../../components/input-number";
import { Catalog } from "../../components/catalog";
import { CartItem } from "../../components/cart-item";
import { Layout } from "../../components/layout";

export function Home() {
  return (
    <>
      <Layout>
        <h1>hello world</h1>
        <Button variant="primary">
          <Trash /> Primary
        </Button>
        <Button variant="secondary">
          <Trash /> secondary
        </Button>
        <Button variant="icon">
          <ShoppingCartSimple />
        </Button>
        <Cart count={3} />
        <Select
          options={[
            {
              text: "Cartão de Crédito",
              value: "credictCard",
              icon: <CreditCard />,
            },
            {
              text: "Cartão de Débido",
              value: "debitCard",
              icon: <Bank />,
            },
            {
              text: "Dinheiro",
              value: "money",
              icon: <Money />,
            },
          ]}
        />
        <Input placeholder="Street" required />
        <Input placeholder="Complement" optional />
        <InputNumber />

        <Catalog
          title="Expresso tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          tags={["Expresso"]}
          price="3,00"
          coffeType="americano"
        />
        <br />
        <br />
        <CartItem
          title={"Expresso tradicional"}
          price={"3,00"}
          coffeType="tradicional"
        />
      </Layout>
    </>
  );
}
