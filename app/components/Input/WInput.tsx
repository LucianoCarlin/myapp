import React from "react";
import { TextField, TextFieldVariants } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface WInputProps<Variant extends TextFieldVariants = TextFieldVariants> {
  variant?: Variant;
  label: string;
  name: string;
  size?: "small" | "medium";
  defaultValue?: string;
}

export function WInput({
  variant = "outlined",
  label,
  size = "small",
  name,
  defaultValue,
  ...rest
}: WInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          fullWidth
          size={size}
          id="outlined"
          label={label}
          variant={variant}
          color="secondary"
          {...field}
          {...rest}
          error={!!errors[name]?.message}
          helperText={errors[name]?.message && <>{errors[name]?.message}</>}
          defaultValue={defaultValue}
        />
      )}
    />
  );
}
