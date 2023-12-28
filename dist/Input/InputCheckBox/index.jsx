import { Input } from "..";
export var InputCheckbox = function (_a) {
    var type = _a.type, label = _a.label, value = _a.value, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange;
    return (<Input disabled={disabled}>
      <label>
        {label && label}
        <input type={type} value={value} checked={checked} onChange={onChange}/>
      </label>
    </Input>);
};
