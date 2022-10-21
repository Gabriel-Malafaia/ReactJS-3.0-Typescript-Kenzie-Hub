import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { modalCreateValidate } from "../../../services/FormsValidate/validation";
import { Button } from "../../../styles/components/Button/style";
import { Text } from "../../../styles/TypograpyText";
import { InputDefault } from "../../Inputs/InputDefault";
import { InputSelectModal } from "../../Inputs/InputSelectModal";
import {
  ModalContainer,
  ModalIntern,
  ModalInternContent,
  ModalInternHeader,
} from "../ModalAddict/style";

export const ModalEditDelete = () => {
  const { editOrDeleteTech, setModalCreateIsOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(modalCreateValidate) });

  return (
    <ModalContainer>
      <ModalIntern onSubmit={handleSubmit(editOrDeleteTech)}>
        <ModalInternHeader>
          <Text tag="h2" fontSize="text1">
            Tecnologia Detalhes
          </Text>
          <button type="reset" onClick={() => setModalCreateIsOpen(false)}>
            X
          </button>
        </ModalInternHeader>
        <ModalInternContent>
          <InputDefault
            labelText="Nome do projeto"
            placeholder="Javascript..."
            register={register}
            element="title"
            elementError={errors.title}
          />

          <InputSelectModal
            labelText="Status"
            elementError={errors.status}
            element="status"
            register={register}
          />

          <Button type="submit" className="hoverPink" background="primary">
            <Text tag="p" fontSize="text1">
              Cadastrar Tecnologia
            </Text>
          </Button>
        </ModalInternContent>
      </ModalIntern>
    </ModalContainer>
  );
};
