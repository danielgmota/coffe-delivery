import { Trash } from "phosphor-react";
import { ICoffeType, getCoffeTypeImage } from "../../utils/coffe-type";
import { Button } from "../button";
import { InputNumber } from "../input-number";
import {
  CartItemActions,
  CartItemContainer,
  CartItemPrice,
  CartItemProduct,
} from "./Cart-item.styles";

interface ICartItemProps {
  title: string;
  price: string;
  coffeType: ICoffeType;
}

export function CartItem({ title, price, coffeType }: ICartItemProps) {
  return (
    <CartItemContainer>
      <CartItemProduct>
        {getCoffeTypeImage(coffeType)}
        <CartItemActions>
          <p>{title}</p>
          <div>
            <InputNumber />
            <Button variant="secondary">
              <Trash />
              REMOVER
            </Button>
          </div>
        </CartItemActions>
      </CartItemProduct>
      <CartItemPrice>R$ {price}</CartItemPrice>
    </CartItemContainer>
  );
}
