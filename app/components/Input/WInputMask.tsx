"use client";
import React from "react";
import { TextField, TextFieldVariants } from "@mui/material";
import { PatternFormat } from "react-number-format";

interface WInputProps<Variant extends TextFieldVariants = TextFieldVariants> {
  variant?: Variant;
  label: string;
  size?: "small" | "medium";
  typeInput: "cpf" | "cnpj" | "cep" | "phone" | "celPhone";
}

function getFormatByType(typeInput: WInputProps["typeInput"]): string {
  switch (typeInput) {
    case "cpf":
      return "###.###.###-##";
    case "cnpj":
      return "##.###.###/####-##";
    case "cep":
      return "#####-###";
    case "phone":
      return "(##) ####-####";
    case "celPhone":
      return "(##) #####-####";
    default:
      return "";
  }
}

export function WInputMask({
  variant = "outlined",
  label,
  size = "small",
  typeInput,
  ...rest
}: WInputProps) {
  const format = getFormatByType(typeInput);

  return (
    <PatternFormat
      customInput={TextField}
      fullWidth
      size={size}
      variant={variant}
      label={label}
      color="secondary"
      format={format}
      {...rest}
    />
  );
}
