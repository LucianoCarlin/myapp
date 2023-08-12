import React, { ReactNode } from 'react';
import { Box, Grid, GridProps } from '@mui/material';

interface GridItemProps extends GridProps {
  children: ReactNode;
}
export function GridItemXs1({ children, ...rest }: GridItemProps) {
  return (
    <Grid item xs={12} sm={6} md={1} {...rest}>
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Grid>
  );
}
