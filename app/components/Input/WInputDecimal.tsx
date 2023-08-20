"use client";
import React from "react";
import { TextField, TextFieldVariants } from "@mui/material";
import { NumericFormat } from "react-number-format";

interface WInputDecimalProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  decimalScale: number;
  decimalSeparator: "," | ".";
}

export function WInputDecimal({
  variant,
  label,
  decimalScale,
  decimalSeparator,
  ...rest
}: WInputDecimalProps) {
  return (
    <NumericFormat
      customInput={TextField}
      fullWidth
      variant={variant}
      label={label}
      color="secondary"
      decimalScale={decimalScale}
      allowNegative={true}
      decimalSeparator={decimalSeparator}
      {...rest}
    />
  );
}
