import React from "react";
import "./buttons.scss"

type ButtonProps = {
  children: string;
};

type PrimaryButtonProps = {
  primary: boolean;
  secondary?: never;
  destructive?: never;
};

type SecondaryButtonProps = {
  primary?: never;
  secondary: boolean;
  destructive?: never;
};

type DestructiveButtonProps = {
  primary?: never;
  secondary?: never;
  destructive: boolean;
};

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = "";
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + " ";
  }
  return classNames.trim();
};

const Button = ({
  children,
  primary = false,
  secondary = false,
  destructive = false,
}: ButtonProps &
  (PrimaryButtonProps | SecondaryButtonProps | DestructiveButtonProps)) => {
  const classNames = createClassNames({ primary, secondary, destructive });

  return <button className={classNames}>{children}</button>;
};

export default Button;