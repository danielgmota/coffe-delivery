import styled from "styled-components";

const ButtonComponent = styled.button`
  border: 0;
  border-radius: 0.375rem;
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const ButtonPrimary = styled(ButtonComponent)`
  background-color: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.75rem 0.5rem;
  min-width: 132px;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ButtonSecoundary = styled(ButtonComponent)`
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;
  padding: 0 0.5rem;
  min-height: 2rem;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const ButtonIcon = styled(ButtonComponent)`
  background-color: ${(props) => props.theme["purple"]};
  color: ${(props) => props.theme["base-card"]};
  padding: 0.5rem;

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background-color: ${(props) => props.theme["purple-dark"]};
  }
`;
