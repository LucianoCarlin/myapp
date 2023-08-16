import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface WButtonProps extends ButtonProps {
  variant?: "contained" | "outlined" | "text";
  textButton: string;
  color:
    | "error"
    | "info"
    | "warning"
    | "inherit"
    | "primary"
    | "secondary"
    | "success";
}

const colorMap = {
  error: "red",
  info: "blue",
  warning: "orange",
  inherit: "slate",
  primary: "purple",
  secondary: "violet",
  success: "green",
  default: "zinc",
};

export function WButton({
  variant = "contained",
  textButton,
  color,
  ...rest
}: WButtonProps) {
  let colorClass = "";

  if (variant === "contained") {
    colorClass = `bg-${colorMap[color]}-500 hover:bg-${colorMap[color]}-600`;
  } else if (variant === "outlined") {
    const baseColorClass = `text-${colorMap[color]}-500 border-solid border-1 border-${colorMap[color]}-300`;
    colorClass = `${baseColorClass} hover:text-${colorMap[color]}-600 hover:border-${colorMap[color]}-500`;
  }

  return (
    <Button className={colorClass} variant={variant} {...rest}>
      {textButton}
    </Button>
  );
}
