'use client';
import React from 'react';
import { Button } from '@mui/material';

interface WButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  textButton: string;
}

export function WButton({ variant = 'contained', textButton }: WButtonProps) {
  return (
    <Button color="info" variant={variant}>
      {textButton}
    </Button>
  );
}
