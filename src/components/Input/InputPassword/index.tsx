import * as S from "../input.style";
import { Input, InputProps } from "..";

export const InputPassword = ({
  label,
  disabled,
  value,
  name,
  register,
  type,
  color,
}: InputProps) => {
  return (
    <Input disabled={disabled}>
      <>
        <S.InputLabel color={color}>{label && label}</S.InputLabel>
        <S.InputTypeBox>
          <input type={type} name={name} value={value} {...register} />
        </S.InputTypeBox>
      </>
    </Input>
  );
};
