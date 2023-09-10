import styled from "styled-components";

export const CatalogImage = styled.div`
  position: relative;
  top: -60px;
  margin-bottom: -50px;
`;

export const CatalogTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  b {
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 4px 8px;
    border-radius: 50%;
    font-size: 0.625rem;
  }
`;

export const CatalogTitle = styled.div`
  font-family: "Baloo 2";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CatalogDesc = styled.div`
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.theme["base-label"]};
`;

export const CatalogFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const CatalogPrice = styled.div`
  font-family: Roboto;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
  }
`;
