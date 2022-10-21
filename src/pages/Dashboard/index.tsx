import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TransitionPage } from "../../components/TransitionPage";
import { DashBoardHeader } from "../../components/Dashboard/DashBoardHeader";
import { DashBoardPerfil } from "../../components/Dashboard/DashBoardPerfil";
import { DashBoardContent } from "../../components/Dashboard/DashBoardContent";
import { UserContext } from "../../contexts/UserContext";
import { ModalAddict } from "../../components/Modal/ModalAddict";
import { ModalContext } from "../../contexts/ModalContext";

const DashBoardPage = () => {
  const { user, logged } = useContext(UserContext);
  const {
    modalCreateIsOpen,
    modalEditDeleteIsOpen,
    createTech,
    editOrDeleteTech,
    setModalCreateIsOpen,
    setModalEditDeleteIsOpen,
  } = useContext(ModalContext);

  return (
    <>
      {logged ? (
        <TransitionPage>
          {modalCreateIsOpen && (
            <ModalAddict
              actionFuction={createTech}
              titleModal="Cadastrar Tecnologia"
              inputLabel="Nome"
              selectLabel="Selecionar status"
              closeFunction={setModalCreateIsOpen}
              typeModal="create"
            />
          )}

          {modalEditDeleteIsOpen && (
            <ModalAddict
              actionFuction={editOrDeleteTech}
              titleModal="Tecnologia Detalhes"
              inputLabel="Nome do projeto"
              selectLabel="Status"
              closeFunction={setModalEditDeleteIsOpen}
            />
          )}

          <DashBoardHeader />
          <DashBoardPerfil user={user} />
          <DashBoardContent />
        </TransitionPage>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default DashBoardPage;
