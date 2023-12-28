"use client";
import * as S from "../input.style";
import { Input } from "..";
export var InputText = function (_a) {
    var disabled = _a.disabled, label = _a.label, placeholder = _a.placeholder, register = _a.register, color = _a.color, name = _a.name, type = _a.type, value = _a.value;
    return (<Input disabled={disabled}>
      <>
        <S.InputLabel color={color}>{label && label}</S.InputLabel>
        <S.InputTypeBox>
          <input type={type} name={name} value={value} {...register}/>
        </S.InputTypeBox>
      </>
    </Input>);
};
