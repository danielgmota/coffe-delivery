import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const HeaderSectionsComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const STATUS_COLOR = {
  yellow: defaultTheme.yellow,
  yellowDark: defaultTheme["yellow-dark"],
  yellowLight: defaultTheme["yellow-light"],
  purple: defaultTheme.purple,
  purpleDark: defaultTheme["purple-dark"],
  purpleLight: defaultTheme["purple-light"],
} as const;

interface IIconContainerProps {
  color: keyof typeof STATUS_COLOR;
}

export const HeaderSectionsIcon = styled.div<IIconContainerProps>`
  svg {
    width: 22px;
    height: 22px;
    ${(props) => {
      return css`
        color: ${STATUS_COLOR[props.color]};
      `;
    }};
  }
`;

export const HeaderSectionsText = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`;
