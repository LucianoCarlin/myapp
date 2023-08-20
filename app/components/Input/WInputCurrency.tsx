"use client";
import React, { FormEvent } from "react";
import { TextField, TextFieldVariants } from "@mui/material";

interface WInputCurrencyProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  prefix: string;
}

export function WInputCurrency({
  variant,
  label,
  prefix,
  ...rest
}: WInputCurrencyProps) {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = currency(e);
    e.currentTarget.value = value;
  };

  function currency(e: FormEvent<HTMLInputElement>) {
    if (e.currentTarget.value) {
      let value = e.currentTarget.value;
      value = value.replace(/\D/g, "");
      const intValue = parseInt(value, 10);

      value = (intValue / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      return value;
    } else {
      return "";
    }
  }

  return (
    <TextField
      fullWidth
      variant={variant}
      label={label}
      color="secondary"
      onChangeCapture={handleChange}
      InputProps={{
        inputComponent: CustomCurrencyFormat,
      }}
      {...rest}
    />
  );
}

function CustomCurrencyFormat(props: any) {
  return <input {...props} />;
}
