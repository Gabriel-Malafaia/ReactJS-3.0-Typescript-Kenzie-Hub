import { useContext } from "react";
import { ModalContext } from "../../../../../contexts/ModalContext";
import { Button } from "../../../../../styles/components/Button/style";
import { Text } from "../../../../../styles/TypograpyText";
import { ContentHeaderContainer } from "./styles";



export const ContentHeader = () => {
  const { setModalCreateIsOpen, setInputName } = useContext(ModalContext)
  
  const openModal = () => {
    setInputName && setInputName("")
    setModalCreateIsOpen(true)
  }

  return (
    <ContentHeaderContainer>
      <Text tag="h2" fontSize="title2">
        Tecnologias
      </Text>
      <Button background="grey1" onClick={openModal}>+</Button>
    </ContentHeaderContainer>
  );
};
