'use client';
import React from 'react';
import { TextField, TextFieldVariants } from '@mui/material';
import { NumericFormat } from 'react-number-format';

interface WInputPercentProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  decimalScale?: number;
  decimalSeparator?: ',' | '.';
  size?: 'small' | 'medium';
}

export function WInputPercent({
  variant,
  label,
  decimalScale,
  decimalSeparator = ',',
  size = 'small',
  ...rest
}: WInputPercentProps) {
  return (
    <NumericFormat
      customInput={TextField}
      fullWidth
      variant={variant}
      label={label}
      size={size}
      color="secondary"
      decimalScale={decimalScale}
      suffix="%"
      allowNegative={false}
      decimalSeparator={decimalSeparator}
      fixedDecimalScale
      {...rest}
    />
  );
}
