import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactElement;
    items?: any;
    label?: string;
    color?: string;
    name?: string;
    register?: UseFormRegisterReturn;
}
export declare const Input: ({ children }: InputProps) => import("react").JSX.Element;
