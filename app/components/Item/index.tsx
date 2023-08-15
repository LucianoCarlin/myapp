"use client";

import React, { ReactNode } from "react";
import { Paper } from "@mui/material";

interface ItemProps {
  children: ReactNode;
}

export function Item({ children }: ItemProps) {
  return (
    <Paper
      elevation={8}
      sx={{
        backgroundColor: "#1A2027",
        padding: 1,
        textAlign: "center",
        color: "secondary",
      }}
    >
      {children}
    </Paper>
  );
}
