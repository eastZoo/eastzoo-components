import * as S from "./button.style";
var Button = function (_a) {
    var type = _a.type, color = _a.color, label = _a.label, onClick = _a.onClick, background = _a.background, children = _a.children;
    return (<S.ButtonBox type={type} color={color} background={background} onClick={onClick}>
      {children}
      {label}
    </S.ButtonBox>);
};
export default Button;
