import { ShoppingCartSimple, Trash } from "phosphor-react";
import { Button } from "../../components/button";
import { Cart } from "../../components/cart";

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
    </>
  );
}
