import styled, { css } from "styled-components";
import { setColors } from "./components/Colors/colors";
import { TitleComponent } from "./components/Typography";

export const Text = styled(TitleComponent)`
  color: ${({ color }) => setColors(color)};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "title1":
        return css`
          font-size: 2rem;
          font-weight: bold;
        `;

      case "title2":
        return css`
          font-size: 1.25rem;
          font-weight: bold;
        `;

      case "title3":
        return css`
          font-size: 1rem;
          font-weight: bold;
        `;

      case "text1":
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;

      case "text2":
        return css`
          font-size: 0.8rem;
          font-weight: 400;
        `;

      case "text3":
        return css`
          font-style: italic;
          font-size: 0.7rem;
          font-weight: bold;
        `;

      case !fontSize:
        return css`
          font-size: 0.7rem;
          font-weight: 400;
        `;
    }
  }}
`;
