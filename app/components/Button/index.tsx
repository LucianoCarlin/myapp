'use client';
import React from 'react';
import { Button, ButtonProps } from '@mui/material';
export interface WButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  textButton: string;
  color: 'error' | 'info' | 'warning' | 'primary' | 'secondary' | 'success';
}

export function WButton({
  variant = 'contained',
  textButton,
  color,
  ...rest
}: WButtonProps) {
  return (
    <Button color={color} variant={variant} {...rest}>
      {textButton}
    </Button>
  );
}
