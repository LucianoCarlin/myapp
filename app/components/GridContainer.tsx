import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface GridContainerProps {
  children: ReactNode;
}

export function GridContainer({ children }: GridContainerProps) {
  return (
    <Grid container spacing={{ xs: 2, md: 1 }}>
      {children}
    </Grid>
  );
}
