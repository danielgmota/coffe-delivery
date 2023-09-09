import { useState } from "react";
import {
  InputCount,
  InputNumberContainer,
  Minus,
  Plus,
} from "./Input-number.styled";

export function InputNumber() {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <InputNumberContainer>
      <Minus
        data-field="quantity"
        onClick={() => setQuantity((curr) => (curr <= 1 ? 1 : curr - 1))}
      >
        -
      </Minus>
      <InputCount
        value={quantity}
        min={1}
        max={99}
        type="number"
        name="quantity"
      />
      <Plus
        data-field="quantity"
        onClick={() => setQuantity((curr) => (curr >= 99 ? 99 : curr + 1))}
      >
        +
      </Plus>
    </InputNumberContainer>
  );
}
