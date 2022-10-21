import { Link } from "react-router-dom";
import { Text } from "../../../styles/TypograpyText";
import { RegisterHeaderStyle } from "./styles";

export const RegisterHeader = () => {
  return (
    <RegisterHeaderStyle>
      <Text tag="h1" fontSize="title1" color="primary">
        Kenzie Hub
      </Text>
      <Link to="/">Voltar</Link>
    </RegisterHeaderStyle>
  );
};
