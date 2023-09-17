import styled from "styled-components";

export const ConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > div > h3 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  > div > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardConfirmed = styled.div`
  width: 40%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  /* background: ${(props) =>
    `linear-gradient(white, white) padding-box, linear-gradient(to right,${props.theme["yellow"]},${props.theme["purple"]}) padding-box`}; */
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  border: 2px solid transparent;

  .card__item {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    .card__item_icon {
      width: 2rem;
      height: 2rem;
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      color: ${(props) => props.theme["white"]};
    }

    .card__item_icon_1 {
      background-color: ${(props) => props.theme["purple"]};
    }
    .card__item_icon_2 {
      background-color: ${(props) => props.theme["yellow"]};
    }
    .card__item_icon_3 {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;
