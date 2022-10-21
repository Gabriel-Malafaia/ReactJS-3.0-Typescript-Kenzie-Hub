import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: 1;
`;


export const ModalIntern = styled.form`
  max-width: 380px;
  width: 100%;
  max-height: 280px;
  height: 100%;
  background-color: grey;
  border-radius: 6px;
  z-index: 1;
`;

export const ModalInternHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 3rem;
  background-color: var(--color-grey-3);

  button {
    background: none;
    color: var(--color-primary);
    font-size: 18px;
  }
`;

export const ModalInternContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--color-grey-2);
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 5px 5px;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    select, input{
        font-size: 16px;
        color: var(--color-grey-4);
    }

    button {
        transition: all 0.3s;
    }

    button:hover {
        background-color: var(--color-primary-Focus);
    }
`
