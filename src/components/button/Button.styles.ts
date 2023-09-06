import styled from "styled-components";

const VARIANT_COLOR = {
  primary: "yellow",
  secondary: "base-button",
} as const;

interface VariantProps {
  variant: keyof typeof VARIANT_COLOR;
}

export const ButtonComponent = styled.button<VariantProps>`
  min-width: 132px;
  padding: 0.75rem 0.5rem;
  border: 0;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme[VARIANT_COLOR[props.variant]]};

  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
