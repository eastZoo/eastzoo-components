import { InputHTMLAttributes } from "react";
import * as S from "./input.style";
import { UseFormRegisterReturn } from "react-hook-form";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactElement;
  items?: any;
  label?: string;
  color?: string;
  name?: string;
  register?: UseFormRegisterReturn;
}

export const Input = ({ children }: InputProps) => {
  return <S.InputBox>{children}</S.InputBox>;
};
