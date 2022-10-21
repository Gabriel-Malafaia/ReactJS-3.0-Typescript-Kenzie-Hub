import { iInputSelect } from "../../../interface";
import { Select } from "../../../styles/components/Select/style";
import { Text } from "../../../styles/TypograpyText";
import InputErrors from "../../Errors";


export const InputSelect = ({elementErrors, register}: iInputSelect) => {
  return (
    <div>
      <Text tag="label" fontSize="text2">
        Selecionar módulo
      </Text>
      <Select {...register("course_module")}>
        <option value="Primeiro Módulo (Front End)">Primeiro Módulo</option>
        <option value="Segundo Módulo (Front End)">Segundo Módulo</option>
        <option value="Terceiro Módulo (Front End)">Terceiro Módulo</option>
      </Select>
      {elementErrors && (
        <InputErrors element={elementErrors.message} />
      )}
    </div>
  );
};
