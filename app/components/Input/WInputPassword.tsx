'use client';
import React, {
  ForwardRefRenderFunction,
  MouseEvent,
  forwardRef,
  useState,
} from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { WInputProps } from '@/app/interface/InterfaceButton';
import { red } from '@mui/material/colors';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, WInputProps> = (
  { name, label, error, size = 'small', variant = 'outlined', ...rest },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <FormControl fullWidth variant={variant} color="secondary" size={size}>
      <InputLabel htmlFor={name} color={!!error ? 'error' : 'secondary'}>
        {label}
      </InputLabel>
      <OutlinedInput
        {...rest}
        id={name}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
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

export const WInputPassword = forwardRef(InputBase);
