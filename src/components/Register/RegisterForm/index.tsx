import { InputDefault } from "../../Inputs/InputDefault";
import { FormHeader } from "../RegisterFormHeader";
import { Button } from "../../../styles/components/Button/style";
import { Text } from "../../../styles/TypograpyText";
import { InputWithConfirm } from "../../Inputs/inputPassword";
import { InputSelect } from "../../Inputs/InputSelect";
import { FormRegister } from "./styles";
import { iRegisterForm } from "../../../interface";

export const RegisterForm = ({errors,register,handleSubmit,registerUser}: iRegisterForm) => {

  return (
    <FormRegister onSubmit={handleSubmit(registerUser)}>
      <FormHeader />
      <InputDefault
        labelText="Nome"
        placeholder="Digite seu nome"
        register={register}
        element="name"
        elementError={errors.name}
      />

      <InputDefault
        labelText="Email"
        placeholder="mail@mail.com"
        register={register}
        element="email"
        elementError={errors.email}
      />

      <InputWithConfirm
        labelText="Senha"
        placeholder="Senha@123"
        errors={errors}
        register={register}
      />

      <InputDefault
        labelText="Biografia"
        placeholder="Fale sobre você..."
        register={register}
        element="bio"
        elementError={errors.bio}
      />

      <InputDefault
        labelText="Contato"
        placeholder="Algum contato/Rede Social"
        register={register}
        element="contact"
        elementError={errors.contact}
      />

      <InputSelect 
      elementErrors={errors.course_module}
      register={register}
      />

      <Button className="hoverPink" background="primary">
        <Text tag="p" fontSize="text1">
          Cadastrar
        </Text>
      </Button>
    </FormRegister>
  );
};
