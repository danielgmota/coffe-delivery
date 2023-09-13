import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: box;
  position: relative;

  span {
    position: absolute;
    top: 15px;
    right: 20px;
    color: ${(props) => props.theme["base-label"]};
    font-size: 12px;
  }
`;

export const InputComponent = styled.input`
  width: 100%;
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid transparent;
  border-radius: 0.25rem;

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
