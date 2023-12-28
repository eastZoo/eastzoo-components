import { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    color?: string;
    label?: string;
    onClick?: any;
    children?: any;
    background?: string;
}
export declare const Button: ({ type, color, label, onClick, background, children, }: ButtonProps) => import("react").JSX.Element;
