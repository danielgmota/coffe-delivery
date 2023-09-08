import styled from "styled-components";

export const CartButton = styled.div`
  display: box;
  position: relative;

  button {
    background-color: ${(props) => props.theme["yellow-light"]} !important;
    color: ${(props) => props.theme["yellow-dark"]} !important;
  }
`;

export const Count = styled.mark`
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 25px;
  font-size: 12px;
`;
