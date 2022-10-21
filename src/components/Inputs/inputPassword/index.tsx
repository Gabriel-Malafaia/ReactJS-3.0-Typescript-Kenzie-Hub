import { Text } from "../../../styles/TypograpyText";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import InputErrors from "../../Errors";
import { Input } from "../../../styles/components/Input/style";
import { iInputWithConfirm } from "../../../interface";

export const InputPassword = ({ labelText, register, placeholder, errors }: iInputWithConfirm) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Text tag="label" fontSize="text1">
        {labelText}
      </Text>

      <section className="hide__password">
        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
      </section>
      
      {errors.password && <InputErrors element={errors.password.message} />}
    </div>
  );
};

export const InputWithConfirm = ({labelText,register,placeholder,errors}: iInputWithConfirm) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div>
        <Text tag="label" fontSize="text1">
          {labelText}
        </Text>

        <section className="hide__password">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </section>

        {errors.password && <InputErrors element={errors.password.message} />}
      </div>

      <div>
        <Text tag="label" fontSize="text2">
          Confirmar Senha
        </Text>
        <Input
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword")}
          placeholder="Confirme sua senha..."
        />
        {errors.confirmPassword && (
          <InputErrors element={errors.confirmPassword.message} />
        )}
      </div>
    </>
  );
};
