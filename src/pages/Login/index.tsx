import { ContainerLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidate } from "../../services/FormsValidate/validation";
import { Navigate } from "react-router-dom";
import { TransitionPage } from "../../components/TransitionPage";
import { LoginForm } from "../../components/Login/LoginForm";
import { LoginHeader } from "../../components/Login/LoginHeader";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iFormLogin } from "../../interface";

const LoginPage = () => {
  const { logged, loginUser } = useContext(UserContext)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({ resolver: yupResolver(loginValidate) });

  return (
    <>
      {!logged ? (
        <TransitionPage>
          <ContainerLogin>
            <LoginHeader />
            <LoginForm
              errors={errors}
              handleSubmit={handleSubmit}
              register={register}
              loginUser={loginUser}
            />
          </ContainerLogin>
        </TransitionPage>
      ) : (
        <Navigate to="/dashboard" replace />
      )}
    </>
  );
};

export default LoginPage;
