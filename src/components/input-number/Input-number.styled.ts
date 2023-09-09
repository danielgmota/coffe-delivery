import styled from "styled-components";

export const InputNumberContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
`;

export const InputCount = styled.input`
  border: 0;
  background-color: ${(props) => props.theme["base-button"]};
  min-width: 20px;
  text-align: center;

  /* Chrome,Safari,Edge,Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const baseButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  color: ${(props) => props.theme["purple"]};

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const Minus = styled(baseButton)`
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
`;

export const Plus = styled(baseButton)`
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
`;
