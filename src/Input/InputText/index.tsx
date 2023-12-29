"use client";

import * as S from "../input.style";
import { Input, InputProps } from "..";

export const InputText = ({
  disabled,
  label,
  placeholder,
  register,
  color,
  name,
  type,
  value,
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
