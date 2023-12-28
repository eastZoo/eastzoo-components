"use client";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var InputBox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"])));
export var InputLabel = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: ", ";\n"], ["\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: ", ";\n"])), function (props) {
    if (props.color == "gray") {
        return props.theme.text_colors.gray;
    }
    else {
        return props.color;
    }
});
export var InputTypeBox = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 56px;\n  border: none;\n  outline: none;\n\n  input[type=\"text\"],\n  input[type=\"password\"] {\n    width: 100%;\n    height: 56px;\n    padding: 0 15px;\n    font-size: 1.8rem;\n    background-color: ", ";\n    border: none;\n    border-radius: 6px;\n    outline: none;\n  }\n\n  input[type=\"checkbox\"] {\n    label:before {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border: 1px solid ", ";\n      border-radius: 100%;\n    }\n  }\n"], ["\n  width: 100%;\n  height: 56px;\n  border: none;\n  outline: none;\n\n  input[type=\"text\"],\n  input[type=\"password\"] {\n    width: 100%;\n    height: 56px;\n    padding: 0 15px;\n    font-size: 1.8rem;\n    background-color: ", ";\n    border: none;\n    border-radius: 6px;\n    outline: none;\n  }\n\n  input[type=\"checkbox\"] {\n    label:before {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border: 1px solid ", ";\n      border-radius: 100%;\n    }\n  }\n"])), function (props) { return props.theme.colors.whiteShade; }, function (props) { return props.theme.colors.borderDefault; });
var templateObject_1, templateObject_2, templateObject_3;
