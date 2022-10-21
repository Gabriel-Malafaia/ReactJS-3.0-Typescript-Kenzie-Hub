import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px;
  border-radius: 5px;
  background-color: var(--color-grey-3);

  ::placeholder {
    color: var(--color-grey-4);
    font-size: 16px;
    font-weight: 400;
  }

  :focus {
    color: var(--color-grey-5);
    border: 2px solid var(--color-grey-5);
  }

  :focus::placeholder {
    color: var(--color-grey-5);
  }
`;
