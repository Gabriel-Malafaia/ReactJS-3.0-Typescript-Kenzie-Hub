import { useContext } from "react";
import { ModalContext } from "../../../../../contexts/ModalContext";
import { Text } from "../../../../../styles/TypograpyText";
import { CardContainer, CardContainerRight } from "./style";

interface iContentCard {
  id?: string;
  title: string;
  status: string;
}

export const ContentCard = ({ id, title, status }: iContentCard) => {
  const { setModalEditDeleteIsOpen, setCurrentCard, setInputName } =
    useContext(ModalContext);

  const sendCardInfo = () => {
    setModalEditDeleteIsOpen(true);
    id && setCurrentCard(id);
    setInputName && setInputName(title)
  };

  return (
    <CardContainer onClick={sendCardInfo} id={id}>
      <Text tag="h2" fontSize="title2">
        {title}
      </Text>

      <CardContainerRight>
        <Text tag="p" fontSize="text">
          {status}
        </Text>
      </CardContainerRight>
    </CardContainer>
  );
};
