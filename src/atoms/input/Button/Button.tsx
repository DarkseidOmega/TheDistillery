import React from "react";
import styled from "styled-components";
import { ButtonProps, ThemeSelector } from "./types";

const ThemedButton = styled.button`
  ${(props: ButtonProps) => ThemeSelector[props.theme]}
`;

export const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return <ThemedButton {...props}>{props.children}</ThemedButton>;
};
