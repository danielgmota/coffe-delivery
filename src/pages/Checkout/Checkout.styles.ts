import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
`;
