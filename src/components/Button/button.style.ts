"use client";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const ButtonBox = styled.button<ButtonProps>`
  width: 100%;
  height: 60px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  background: ${(props: any) => props.theme.colors[props.background]};
  transition: background 0.2s ease;

  color: ${(props) => {
    if (props.color == "white") {
      return props.theme.colors.white;
    } else {
      return props.color;
    }
  }};

  &:hover {
    background: ${(props: any) =>
      props.theme.colors[props.background + "Hover"]};
    transition: background 0.2s ease;
  }
`;
