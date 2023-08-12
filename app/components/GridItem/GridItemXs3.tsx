import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemProps extends GridProps {
  children: ReactNode;
}
export function GridItemXs3({ children, ...rest }: GridItemProps) {
  return (
    <Grid item xs={12} sm={6} md={3} {...rest}>
      <Stack gap={1} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
