'use client';
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface WButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  textButton: string;
  color:
    | 'error'
    | 'info'
    | 'warning'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success';
}

export function WButton({
  variant = 'contained',
  textButton,
  color,
  ...rest
}: WButtonProps) {
  let colorClass = '';

  if (variant === 'contained') {
    switch (color) {
      case 'error':
        colorClass = 'bg-red-500 hover:bg-red-600';
        break;
      case 'info':
        colorClass = 'bg-blue-500 hover:bg-blue-600';
        break;
      case 'warning':
        colorClass = 'bg-orange-500 hover:bg-orange-600';
        break;
      case 'inherit':
        colorClass = 'bg-slate-500 hover:bg-slate-600';
        break;
      case 'primary':
        colorClass = 'bg-purple-500 hover:bg-purple-600';
        break;
      case 'secondary':
        colorClass = 'bg-violet-500 hover:bg-violet-600';
        break;
      case 'success':
        colorClass = 'bg-green-500 hover:bg-green-600';
        break;
      default:
        colorClass = 'bg-zinc-500 hover:bg-zinc-600';
    }
  } else if (variant === 'outlined') {
    switch (color) {
      case 'error':
        colorClass =
          'text-red-500 border-solid border-1 border-red-300 hover:text-red-500 hover:border-red-500';
        break;
      case 'info':
        colorClass =
          'text-blue-500 border-solid border-1 border-blue-300 hover:text-blue-500 hover:border-blue-500';
        break;
      case 'warning':
        colorClass =
          'text-orange-500 border-solid border-1 border-orange-300 hover:text-orange-500 hover:border-orange-500';
        break;
      case 'inherit':
        colorClass =
          'text-slate-500 border-solid border-1 border-slate-300 hover:text-slate-500 hover:border-slate-500';
        break;
      case 'primary':
        colorClass =
          'text-purple-500 border-solid border-1 border-purple-300 hover:text-purple-500 hover:border-purple-500';
        break;
      case 'secondary':
        colorClass =
          'text-violet-500 border-solid border-1 border-violet-300 hover:text-violet-500 hover:border-violet-500';
        break;
      case 'success':
        colorClass =
          'text-green-500 border-solid border-1 border-green-300 hover:text-green-500 hover:border-green-500';
        break;
      default:
        colorClass =
          'text-zinc-500 border-solid border-1 border-zinc-300 hover:text-zinc-500 hover:border-zinc-500';
    }
  }
  return (
    <Button className={colorClass} variant={variant} {...rest}>
      {textButton}
    </Button>
  );
}
