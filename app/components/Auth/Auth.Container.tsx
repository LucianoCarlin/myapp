import React, { ReactNode } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';

interface AuthContainerProps {
  children: ReactNode;
}

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <Grid container maxWidth="xs" component={Paper} sx={{ height: '100vh' }}>
      {children}
    </Grid>
  );
}
