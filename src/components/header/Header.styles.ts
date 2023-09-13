import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme["background"]};
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 2rem 10rem;
  position: fixed;
  top: 0;
  z-index: 99;

  > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  height: 2.375rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 400;
`;
