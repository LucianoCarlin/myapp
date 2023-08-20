"use client";

import React, { ReactNode } from "react";
import { Paper, PaperProps } from "@mui/material";

interface WPaperProps extends PaperProps {
  children: ReactNode;
  elevation?: number;
  typePaper: "dark" | "white";
}

export function WPaper({
  elevation = 12,
  typePaper,
  children,
  ...rest
}: WPaperProps) {
  let colorClass = "";
  if (typePaper === "dark") {
    colorClass = "text-gray-50 bg-slate-600";
  } else {
    colorClass = "bg-gray-600 bg-slate-100";
  }
  return (
    <Paper elevation={elevation} className={colorClass} {...rest}>
      {children}
    </Paper>
  );
}
