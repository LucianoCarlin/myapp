'use client';
import React, { useState, ChangeEvent } from 'react';
import { TextField, TextFieldVariants } from '@mui/material';

interface WInputCurrencyProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  size?: 'small' | 'medium';
}

function CustomCurrencyFormat(props: any) {
  return <input {...props} />;
}

export function WInputCurrency({
  variant,
  label,
  size = 'small',
  ...rest
}: WInputCurrencyProps) {
  const [formattedValue, setFormattedValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = currency(e.target.value);
    setFormattedValue(value);
  };

  function currency(value: string) {
    if (value) {
      value = value.replace(/\D/g, '');
      const intValue = parseInt(value, 10);

      value = (intValue / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      return value;
    } else {
      return '';
    }
  }

  return (
    <TextField
      fullWidth
      variant={variant}
      label={label}
      size={size}
      color="secondary"
      value={formattedValue}
      onChange={handleChange}
      InputProps={{
        inputComponent: CustomCurrencyFormat,
      }}
      {...rest}
    />
  );
}
