import { ButtonHTMLAttributes } from "react";
import * as S from "./button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  color?: string;
  label?: string;
  onClick?: any;
  children?: any;
  background?: string;
}

const Button = ({
  type,
  color,
  label,
  onClick,
  background,
  children,
}: ButtonProps) => {
  return (
    <S.ButtonBox
      type={type}
      color={color}
      background={background}
      onClick={onClick}
    >
      {children}
      {label}
    </S.ButtonBox>
  );
};

export default Button;
