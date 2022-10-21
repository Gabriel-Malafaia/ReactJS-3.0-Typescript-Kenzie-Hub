import styled from "styled-components";

export const ContentHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    p {
        max-width: 60px;
    }

    button {
        max-width: 40px;
        max-height: 40px;
        padding: 0;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s;

        :hover {
            filter: brightness(1.5);
        }
    }
`