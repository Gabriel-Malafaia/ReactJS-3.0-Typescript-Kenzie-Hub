import { createContext, useContext, useState } from "react";
import { iChildren, iContextModal, iCreateTech, iModalEditDelete } from "../../interface";
import { Api } from "../../services/Api/api";
import {toastError,toastSucess} from "../../styles/components/Toastify/toast";
import { UserContext } from "../UserContext";

export const ModalContext = createContext({} as iContextModal);

export const ModalProvider = ({ children }: iChildren) => {
  const { update, setUpdate, setLoading }: any = useContext(UserContext);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalEditDeleteIsOpen, setModalEditDeleteIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState("");
  const [currentAction, setCurrentAction] = useState("");
  const [inputName, setInputName] = useState("");

  const createTech = async (data: iCreateTech) => {
    setLoading(true);
    try {
      await Api.post("/users/techs", data).then(() => {
        toastSucess("Tecnologia cadastrada!");
        setUpdate(!update);
        setModalCreateIsOpen(false);
      });
    } catch (error) {
      toastError("Tecnologia já existe!");
    }
    setLoading(false);
  };

  const editOrDeleteTech = async (data: iModalEditDelete) => {
    setLoading(true);

    if (currentAction == "edit") {
      try {
        await Api.put(`/users/techs/${currentCard}`, data).then(() => {
          toastSucess("Tecnologia editada!");
        });
      } catch (error) {
        toastError("Tecnologia já existe!");
      }
    }

    if (currentAction == "delete") {
      try {
        await Api.delete(`/users/techs/${currentCard}`).then(() => {
          toastSucess("Tecnologia deletada!");
        });
      } catch (error) {
        toastError("Algo deu errado!");
      }
    }

    setLoading(false);
    setInputName("");
    setUpdate(!update);
    setModalEditDeleteIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        createTech,
        editOrDeleteTech,
        modalCreateIsOpen,
        setModalCreateIsOpen,
        modalEditDeleteIsOpen,
        setModalEditDeleteIsOpen,
        setCurrentCard,
        setCurrentAction,
        setInputName,
        inputName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
