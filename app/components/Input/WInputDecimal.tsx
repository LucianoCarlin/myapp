'use client';
import React from 'react';
import { TextField, TextFieldVariants } from '@mui/material';
import { NumericFormat } from 'react-number-format';

interface WInputDecimalProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  decimalScale?: number;
  decimalSeparator?: ',' | '.';
  size?: 'small' | 'medium';
}

export function WInputDecimal({
  variant,
  label,
  decimalScale = 2,
  decimalSeparator = ',',
  size = 'small',
  ...rest
}: WInputDecimalProps) {
  return (
    <NumericFormat
      customInput={TextField}
      fullWidth
      variant={variant}
      label={label}
      size={size}
      color="secondary"
      decimalScale={decimalScale}
      allowNegative={true}
      decimalSeparator={decimalSeparator}
      fixedDecimalScale
      {...rest}
    />
  );
}
