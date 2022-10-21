import styled from "styled-components";

export const FormLoginStyle = styled.form`
  max-width: 420px;
  width: 100%;

  background-color: var(--color-grey-2);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1rem;

  .hide__password {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-grey-3);
    padding: 8px;
    height: 48px;
    border-radius: 5px;
    margin: 0.8rem 0 0.3rem 0;
    border: 2px solid transparent;
  }

  .hide__password:focus-within {
    border: 2px solid white;
  }

  .hide__password input {
    margin: 0;
    padding: 0;
    background: none;
    outline: none;
  }

  .hide__password span {
    height: 70%;
    background: none;
    color: var(--color-grey-5);
  }

  .hide__password svg {
    transition: all 0.3s;
    text-align: center;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  .hoverPink,
  .hoverGrey {
    transition: ease 0.3s;
  }

  .hoverPink:hover {
    background-color: var(--color-primary-Focus);
  }

  .hoverGrey:hover {
    background-color: var(--color-grey-3);
  }

  a {
    width: 100%;
  }

  div {
    width: 100%;
  }

  div input {
    color: var(--color-grey-5);
    margin: 0.8rem 0 0.3rem 0;
    border: 2px solid transparent;
  }
`;
