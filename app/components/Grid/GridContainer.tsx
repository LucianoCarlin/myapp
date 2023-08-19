import React, { ReactNode } from "react";
import { Grid, GridProps } from "@mui/material";

interface GridContainerProps extends GridProps {
  children: ReactNode;
}

export function GridContainer({ children, ...rest }: GridContainerProps) {
  return (
    <Grid container spacing={2} {...rest}>
      {children}
    </Grid>
  );
}
