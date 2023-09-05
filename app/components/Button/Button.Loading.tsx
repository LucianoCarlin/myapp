"use client";
import React from "react";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { Save } from "@mui/icons-material";

export interface WButtonProps extends LoadingButtonProps {
  variant?: "contained" | "outlined" | "text";
  textButton: string;
  color: "error" | "info" | "warning" | "primary" | "secondary" | "success";
  position: "start" | "end" | "center";
  loading: boolean;
}

export function WLoadingButton({
  variant = "contained",
  textButton,
  color,
  position,
  loading,
  ...rest
}: WButtonProps) {
  return (
    <LoadingButton
      color={color}
      variant={variant}
      {...rest}
      loading={loading}
      loadingPosition={position}
      endIcon={<Save />}
    >
      {textButton}
    </LoadingButton>
  );
}
