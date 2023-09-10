import styled from "styled-components";

export const CartItemContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 0.5rem 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartItemProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.25rem;

  img {
    width: 64px;
  }
`;

export const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const CartItemPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
