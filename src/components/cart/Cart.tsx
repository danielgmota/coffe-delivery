import { ShoppingCartSimple } from "phosphor-react";
import { Button } from "../button";
import { CartButton, Count } from "./Cart.styles";

interface ICartProps {
  count?: number;
}

export function Cart({ count }: ICartProps) {
  return (
    <CartButton>
      <Button variant="icon">
        <ShoppingCartSimple />
      </Button>
      {count ? <Count>{count}</Count> : null}
    </CartButton>
  );
}
