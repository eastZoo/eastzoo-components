"use client";

import styled, { css } from "styled-components";
import { InputProps } from ".";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputLabel = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => {
    if (props.color == "gray") {
      return props.theme.text_colors.gray;
    } else {
      return props.color;
    }
  }};
`;

export const InputTypeBox = styled.div`
  width: 100%;
  height: 56px;
  border: none;
  outline: none;

  input[type="text"],
  input[type="password"] {
    width: 100%;
    height: 56px;
    padding: 0 15px;
    font-size: 1.8rem;
    background-color: ${(props) => props.theme.colors.whiteShade};
    border: none;
    border-radius: 6px;
    outline: none;
  }

  input[type="checkbox"] {
    label:before {
      display: inline-block;
      width: 24px;
      height: 24px;
      border: 1px solid ${(props) => props.theme.colors.borderDefault};
      border-radius: 100%;
    }
  }
`;
