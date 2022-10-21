import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContainerRegister } from "./style";
import { registerValidate } from "../../services/FormsValidate/validation";
import { TransitionPage } from "../../components/TransitionPage";
import { RegisterHeader } from "../../components/Register/RegisterHeader";
import { RegisterForm } from "../../components/Register/RegisterForm";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iFormRegister } from "../../interface";

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(registerValidate) });

  return (
    <TransitionPage>
      <ContainerRegister>
        <RegisterHeader />
        <RegisterForm
          errors={errors}
          register={register}
          handleSubmit={handleSubmit}
          registerUser={registerUser}
        />
      </ContainerRegister>
    </TransitionPage>
  );
};

export default RegisterPage;
