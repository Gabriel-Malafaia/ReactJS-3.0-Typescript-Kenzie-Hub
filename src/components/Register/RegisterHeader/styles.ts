import styled from "styled-components";

export const RegisterHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  a {
    background-color: var(--color-grey-2);
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    color: var(--color-grey-5);
    transition: ease 0.3s;
  }

  a:hover {
    background-color: var(--color-grey-3);
  }
`;
