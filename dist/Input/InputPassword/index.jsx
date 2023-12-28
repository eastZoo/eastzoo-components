import * as S from "../input.style";
import { Input } from "..";
export var InputPassword = function (_a) {
    var label = _a.label, disabled = _a.disabled, value = _a.value, name = _a.name, register = _a.register, type = _a.type, color = _a.color;
    return (<Input disabled={disabled}>
      <>
        <S.InputLabel color={color}>{label && label}</S.InputLabel>
        <S.InputTypeBox>
          <input type={type} name={name} value={value} {...register}/>
        </S.InputTypeBox>
      </>
    </Input>);
};
