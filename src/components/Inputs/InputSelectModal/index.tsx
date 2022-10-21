import { iInputSelectModal } from "../../../interface";
import { Select } from "../../../styles/components/Select/style";
import { Text } from "../../../styles/TypograpyText";

export const InputSelectModal = ({labelText, elementError,element, register}: iInputSelectModal) => {
  return (
    <div>
      <Text tag="label" fontSize="text1">
        {labelText}
      </Text>
      <Select {...register(element)}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>
      {elementError && (
        <Text tag="span" fontSize="text2" color="error">
          {elementError.message}
        </Text>
      )}
    </div>
  );
};
