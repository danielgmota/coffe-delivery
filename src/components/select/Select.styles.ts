import styled from "styled-components";

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const SelectItem = styled.div`
  cursor: pointer;
  border-radius: 0.375rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 1rem;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;
  border: 1px solid transparent;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &.active {
    border: 1px solid ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["purple-light"]};
  }
`;
