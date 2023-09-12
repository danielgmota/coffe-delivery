import styled from "styled-components";

export const HomeTitle = styled.h3`
  font-family: "Baloo 2";
  font-size: 2rem;
  font-weight: 800;
`;

export const Catalogs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`;
