'use client';
import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { WInputProps } from '@/app/interface/InterfaceButton';
import { red } from '@mui/material/colors';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, WInputProps> = (
  { name, label, error, size = 'small', variant = 'outlined', ...rest },
  ref
) => {
  return (
    <FormControl fullWidth variant={variant} color="secondary" size={size}>
      <InputLabel htmlFor={name} color={!!error ? 'error' : 'secondary'}>
        {label}
      </InputLabel>
      <OutlinedInput
        {...rest}
        id={name}
        label={label}
        name={name}
        color={!!error ? 'error' : 'secondary'}
        error={!!error}
        ref={ref}
      />
      {!!error && (
        <FormHelperText sx={{ color: red[700] }}>
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export const WInput = forwardRef(InputBase);
