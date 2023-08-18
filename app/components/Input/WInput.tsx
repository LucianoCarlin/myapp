import React from 'react';
import { TextField, TextFieldVariants } from '@mui/material';

interface WInputProps<Variant extends TextFieldVariants = TextFieldVariants> {
  variant?: Variant;
  label: string;
  size?: 'small' | 'medium';
}

export function WInput({
  variant = 'outlined',
  label,
  size = 'small',
  ...rest
}: WInputProps) {
  return (
    <TextField
      fullWidth
      size={size}
      id="outlined"
      label={label}
      variant={variant}
      color="secondary"
      {...rest}
    />
  );
}
