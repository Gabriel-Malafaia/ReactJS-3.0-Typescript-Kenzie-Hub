import styled from "styled-components";

export const ContainerEditButtons = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  gap: 1rem;

  button:nth-child(1) {
    background-color: var(--color-primary);

    :hover {
        background-color: var(--color-primary-Focus);
    }
  }

  button:nth-child(2) {
    width: 55%;
    background-color: var(--color-grey-4);

    :hover {
        background-color: var(--color-grey-3);
    }
  }
`;
