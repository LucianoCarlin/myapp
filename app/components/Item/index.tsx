'use client';

import React, { ReactNode } from 'react';
import { Paper } from '@mui/material';

interface ItemProps {
  children: ReactNode;
}

export function Item({ children }: ItemProps) {
  return (
    <Paper
      elevation={12}
      className="text-gray-50 bg-slate-800"
      sx={{
        paddingX: 2,
        textAlign: 'center',
        paddingY: 4,
      }}
    >
      {children}
    </Paper>
  );
}
