import styled from "styled-components";

export const HeaderDashboard = styled.header`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--color-grey-3);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    max-width: 100px;
    height: 42px;
    padding: 0;
    background-color: var(--color-grey-3);
    transition: all 0.3s;
  }

  button:hover {
    background-color: var(--color-grey-4);
  }

  button {
    color: var(--color-grey-5);
  }
`;
