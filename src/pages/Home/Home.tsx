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

export function Home() {
  return (
    <>
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
    </>
  );
}
