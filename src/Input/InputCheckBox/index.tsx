import { Input, InputProps } from "..";
import * as S from "../input.style";

export const InputCheckbox = ({
    type,
    label,
    value,
    checked,
    disabled,
    onChange,
}: InputProps) => {
  return (
    <Input disabled={disabled}>
      <label>
        {label && label}
        <input
          type={type}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </Input>
  );
};
