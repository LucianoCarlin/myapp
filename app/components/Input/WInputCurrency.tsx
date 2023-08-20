"use client";
import React from "react";
import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { NumericFormat } from "react-number-format";

interface WInputCurrencyProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  prefix: string;
  decimalScale: number;
}

export function WInputCurrency({
  variant,
  label,
  prefix,
  decimalScale,
  ...rest
}: WInputCurrencyProps) {
  return (
    <NumericFormat
      customInput={TextField}
      fullWidth
      variant={variant}
      label={label}
      color="secondary"
      prefix={prefix}
      decimalScale={decimalScale}
      allowNegative={false}
      {...rest}
    />
  );
}
