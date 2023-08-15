import React, { ReactNode } from 'react';
import { GridProps, Grid } from '@mui/material';

interface GridItemProps extends GridProps {
  children: ReactNode;
  md: number;
}

export function GridItem({ children, md, ...rest }: GridItemProps) {
  return (
    <Grid item xs={12} sm={6} md={md} {...rest}>
      {children}
    </Grid>
  );
}
