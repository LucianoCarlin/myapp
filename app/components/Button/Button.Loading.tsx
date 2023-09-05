'use client';
import React from 'react';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
export interface WButtonProps extends LoadingButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  textButton: string;
  color: 'error' | 'info' | 'warning' | 'primary' | 'secondary' | 'success';
  position: 'start' | 'end' | 'center';
}

export function WLoadingButton({
  variant = 'contained',
  textButton,
  color,
  position,
  ...rest
}: WButtonProps) {
  return (
    <LoadingButton color={color} variant={variant} {...rest}>
      {textButton}
    </LoadingButton>
  );
}
