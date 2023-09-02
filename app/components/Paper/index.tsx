"use client";

import React, { ReactNode } from "react";
import { Paper, PaperProps } from "@mui/material";

export interface WPaperProps extends PaperProps {
  children: ReactNode;
  elevation?: number;
  typePaper?: "dark" | "white";
}

export function WPaper({
  elevation = 12,
  typePaper,
  children,
  ...rest
}: WPaperProps) {
  let colorClass = "";
  return (
    <Paper elevation={elevation} {...rest}>
      {children}
    </Paper>
  );
}
