import React, { ReactNode } from "react";
import { GridProps } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface GridItemProps extends GridProps {
  children: ReactNode;
  md: number;
}

export function GridItem({ children, md, ...rest }: GridItemProps) {
  return (
    <Grid xs={12} sm={6} md={md} {...rest}>
      {children}
    </Grid>
  );
}
