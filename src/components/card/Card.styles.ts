import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 1.25rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;
