import styled from "styled-components";

export const InputContainer = styled.div`
  width: fit-content;
  display: box;
  position: relative;

  span {
    position: relative;
    top: 0;
    left: -60px;
    color: ${(props) => props.theme["base-label"]};
    font-size: 12px;
  }
`;

export const InputComponent = styled.input`
  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
