"use client";
import React from "react";
import { TextField, TextFieldVariants } from "@mui/material";
import { NumericFormat } from "react-number-format";

interface WInputPercentProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  decimalScale: number;
}

export function WInputPercent({
  variant,
  label,
  decimalScale,
  ...rest
}: WInputPercentProps) {
  return (
    <NumericFormat
      customInput={TextField}
      fullWidth
      variant={variant}
      label={label}
      color="secondary"
      decimalScale={decimalScale}
      suffix="%"
      allowNegative={false}
      {...rest}
    />
  );
}
