import styled from "styled-components";
import { setColors } from "../Colors/colors";

interface iButton {
  background?: string;
}

export const Button = styled.button<iButton>`
  width: 100%;
  height: 48px;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  color: var(--color-grey-5);
  background-color: ${({ background }) => setColors(background)};
`;
