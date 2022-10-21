import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  iApiUserResponse,
  iChildren,
  iContextUser,
  iFormLogin,
  iFormRegister,
  iLogged,
  profileApi,
} from "../../interface";
import { Api } from "../../services/Api/api";
import {
  toastError,
  toastSuccessBottom,
  toastSucess,
} from "../../styles/components/Toastify/toast";

export const UserContext = createContext({} as iContextUser);

export const UserProvider = ({ children }: iChildren) => {
  const [logged, setLogged] = useState<iLogged>(
    localStorage.getItem("KenzieHub@token")
  );
  const [user, setUser] = useState<iApiUserResponse>();
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (data: iFormRegister) => {
    setLoading(true);
    delete data.confirmPassword;
    const required = await Api.post("/users", data)
      .then((res) => {
        toastSuccessBottom("Faça o login!");
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        const error = err.response.data.message;

        error.includes("exists")
          ? toastError("Email já cadastrado!")
          : toastError("Verifique seus dados!");
      });
    return required;
  };

  const loginIsValid = (id: string, token: string, user: iApiUserResponse) => {
    localStorage.setItem("KenzieHub@token", token);
    localStorage.setItem("KenzieHub@idUser", id);
    setUser(user);
    toastSucess("Login Efetuado!");
    setTimeout(() => {
      setLoading(false);
      setLogged(true);
    }, 2000);
  };

  const loginUser = async (data: iFormLogin) => {
    setLoading(true);
    const required = await Api.post("/sessions", data)
      .then((res) => {
        const {
          user: { id },
          token,
          user,
        } = res.data;
        loginIsValid(id, token, user);
        setUpdate(!update);
      })
      .catch((err) => {
        toastError("Usuário ou senha inválidos!");
        setLoading(false);
      });

    return required;
  };

  const logoutUser = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const token = localStorage.getItem("KenzieHub@token");
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    if (token) {
      profileApi()
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => setLogged(false));
    }
  }, [update]);

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        logged,
        setLogged,
        user,
        logoutUser,
        setUpdate,
        update,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
