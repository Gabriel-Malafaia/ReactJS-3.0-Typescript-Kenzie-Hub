import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-1);
  border-radius: 6px;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  flex-wrap: wrap;
  gap: 1rem;

  :hover {
    transform: scale(1.01);
    background-color: var(--color-grey-2);
  }
`;


export const CardContainerRight = styled.div`
  display: flex;
  align-items: center;

  p {
    color: var(--color-grey-4);
  }
`
