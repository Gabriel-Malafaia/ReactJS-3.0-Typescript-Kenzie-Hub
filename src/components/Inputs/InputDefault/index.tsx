import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { iInputSelectModal } from "../../../interface";
import { Input } from "../../../styles/components/Input/style";
import { Text } from "../../../styles/TypograpyText";

export const InputDefault = ({
  labelText,
  register,
  placeholder,
  element,
  elementError,
}: iInputSelectModal) => {
  const { inputName } = useContext(ModalContext);
  const token = localStorage.getItem("KenzieHub@token");

  return (
    <div>
      <Text tag="label" fontSize="text1">
        {labelText}
      </Text>

      {!inputName || !token ? (
        <>
          <Input {...register(element)} placeholder={placeholder} />
          {elementError && (
            <Text tag="span" fontSize="text2" color="error">
              {elementError.message}
            </Text>
          )}
        </>
      ) : (
        <>
          <Input disabled value={typeof inputName !== "boolean" ? inputName : ''} placeholder={placeholder} />
        </>
      )}
    </div>
  );
};
