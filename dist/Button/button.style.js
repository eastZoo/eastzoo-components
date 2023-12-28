"use client";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var ButtonBox = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 60px;\n  font-size: 2rem;\n  font-weight: 500;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 6px;\n  border: none;\n  background: ", ";\n  transition: background 0.2s ease;\n\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    transition: background 0.2s ease;\n  }\n"], ["\n  width: 100%;\n  height: 60px;\n  font-size: 2rem;\n  font-weight: 500;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 6px;\n  border: none;\n  background: ", ";\n  transition: background 0.2s ease;\n\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    transition: background 0.2s ease;\n  }\n"])), function (props) { return props.theme.colors[props.background]; }, function (props) {
    if (props.color == "white") {
        return props.theme.colors.white;
    }
    else {
        return props.color;
    }
}, function (props) {
    return props.theme.colors[props.background + "Hover"];
});
var templateObject_1;
