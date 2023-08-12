"use client";
import React, { ReactNode } from "react";
import { theme } from "@/app/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProviderCuston({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
