import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { Button } from "../../../styles/components/Button/style";
import { ContainerEditButtons } from "./style";

export const ModalEditButtons = () => {
  const { setCurrentAction } = useContext(ModalContext);

  return (
    <ContainerEditButtons>
      <Button onClick={() => setCurrentAction("edit")} type="submit">
        Editar
      </Button>
      <Button onClick={() => setCurrentAction("delete")} type="submit">
        Deletar
      </Button>
    </ContainerEditButtons>
  );
};
