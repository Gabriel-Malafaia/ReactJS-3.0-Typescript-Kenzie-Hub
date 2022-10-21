import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { iModalAddict, iModalEditDelete } from "../../../interface";
import { Button } from "../../../styles/components/Button/style";
import { Text } from "../../../styles/TypograpyText";
import { InputDefault } from "../../Inputs/InputDefault";
import { InputSelectModal } from "../../Inputs/InputSelectModal";
import { ModalEditButtons } from "../ModalEditButtons";
import {
  ModalContainer,
  ModalIntern,
  ModalInternContent,
  ModalInternHeader,
} from "./style";

export const ModalAddict = ({
  actionFuction,
  titleModal,
  inputLabel,
  selectLabel,
  closeFunction,
  typeModal,
}: iModalAddict) => {
  const [animateOut, setAnimateOut] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iModalEditDelete>();

  const { setInputName } = useContext(ModalContext);

  return (
    <ModalContainer>
      <ModalIntern
        onSubmit={handleSubmit(actionFuction)}
        className={`${
          animateOut
            ? "animate__animated animate__fadeOut animate__faster"
            : "animate__animated animate__fadeIn animate__faster"
        }`}
      >
        <ModalInternHeader>
          <Text tag="h2" fontSize="text1">
            {titleModal}
          </Text>
          <button
            type="reset"
            onClick={() => {
              setAnimateOut(true);
              setTimeout(() => {
                closeFunction(false);
                setInputName && setInputName("");
              }, 600);
            }}
          >
            X
          </button>
        </ModalInternHeader>
        <ModalInternContent>
          <InputDefault
            labelText={inputLabel}
            placeholder="Javascript..."
            register={register}
            element="title"
            elementError={errors.title}
          />

          <InputSelectModal
            labelText={selectLabel}
            elementError={errors.status}
            element="status"
            register={register}
          />

          {typeModal == "create" ? (
            <Button type="submit" className="hoverPink" background="primary">
              <Text tag="p" fontSize="text1">
                Cadastrar Tecnologia
              </Text>
            </Button>
          ) : (
            <ModalEditButtons />
          )}
        </ModalInternContent>
      </ModalIntern>
    </ModalContainer>
  );
};
