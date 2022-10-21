import { Link } from "react-router-dom";
import { iLoginFormFunction } from "../../../interface";
import { Button } from "../../../styles/components/Button/style";
import { Text } from "../../../styles/TypograpyText";
import { InputDefault } from "../../Inputs/InputDefault";
import { InputPassword } from "../../Inputs/inputPassword";
import { FormLoginStyle } from "./styles";


export const LoginForm = ({ handleSubmit, register, errors, loginUser }: iLoginFormFunction) => {
  return (
    <FormLoginStyle onSubmit={handleSubmit(loginUser)} action="">
      <Text tag="h2" fontSize="title2">
        Login
      </Text>

      <InputDefault
        labelText="Email"
        placeholder="mail@mail.com"
        register={register}
        element="email"
        elementError={errors.email}
      />

      <InputPassword
        labelText="Senha"
        placeholder="Senha@123"
        errors={errors}
        register={register}
      />

      <Button className="hoverPink" background="primary">
        <Text tag="p" fontSize="text1">
          Entrar
        </Text>
      </Button>

      <Text tag="span" fontSize="text2" color="grey">
        Ainda não possui uma conta?
      </Text>

      <Link to="/register">
        <Button className="hoverGrey" background="grey">
          <Text tag="p" fontSize="text1">
            Cadastre-se
          </Text>
        </Button>
      </Link>
    </FormLoginStyle>
  );
};
