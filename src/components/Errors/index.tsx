import { Text } from "../../styles/TypograpyText";

interface iElement {
  element?: string
}

const InputErrors = ({ element }: iElement) => {
  return (
    <>
      <Text tag="span" fontSize="text2" color="error">
        {element}
      </Text>
    </>
  );
};

export default InputErrors
