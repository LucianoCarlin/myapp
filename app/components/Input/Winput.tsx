import React from 'react';
import { TextField, TextFieldVariants } from '@mui/material';

interface WInputProps<Variant extends TextFieldVariants = TextFieldVariants> {
  variant?: Variant;
  label: string;
}

export function WInput({ variant = 'outlined', label, ...rest }: WInputProps) {
  return <TextField id="outlined" label={label} variant={variant} {...rest} />;
}
