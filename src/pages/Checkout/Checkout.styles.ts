import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  > div:first-child {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  > div:last-child {
    width: 40%;
  }

  h3 {
    font-family: "Baloo 2";
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }
`;

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;

  form > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1rem 0.75rem;
    grid-auto-flow: row;
    grid-template-areas:
      "cep cep cep . . . . . . . ."
      "rua rua rua rua rua rua rua rua rua rua rua"
      "numero numero numero complemento complemento complemento complemento complemento complemento complemento complemento"
      "bairro bairro bairro cidade cidade cidade cidade cidade cidade uf uf";
  }

  .cep {
    grid-area: cep;
  }

  .rua {
    grid-area: rua;
  }

  .numero {
    grid-area: numero;
  }

  .complemento {
    grid-area: complemento;
  }

  .bairro {
    grid-area: bairro;
  }

  .cidade {
    grid-area: cidade;
  }

  .uf {
    grid-area: uf;
  }
`;

export const CheckoutItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  hr {
    border: 1px solid ${(props) => props.theme["base-button"]};
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    span {
      font-size: 0.875rem;
    }

    b {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 700;
    }
  }
`;
