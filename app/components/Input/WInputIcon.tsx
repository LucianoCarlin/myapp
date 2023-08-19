import React, { ReactElement } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextFieldVariants,
} from "@mui/material";

interface WInputIconProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  size?: "small" | "medium";
  icon: ReactElement;
  position: "end" | "start";
}

export function WInputIcon({
  label,
  size = "small",
  variant = "outlined",
  icon,
  position,
  ...rest
}: WInputIconProps) {
  const inputAdornmentPosition =
    position === "start" ? "start" : position === "end" ? "end" : undefined;

  return (
    <FormControl fullWidth variant={variant} color="secondary" size={size}>
      <InputLabel htmlFor="outlined-adornment-icon">{label}</InputLabel>
      <OutlinedInput
        {...rest}
        id="outlined-adornment-icon"
        startAdornment={
          inputAdornmentPosition === "start" && (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle visibility"
                edge="start"
                sx={{ cursor: "default" }}
              >
                {icon}
              </IconButton>
            </InputAdornment>
          )
        }
        endAdornment={
          inputAdornmentPosition === "end" && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle visibility"
                edge="end"
                sx={{ cursor: "default" }}
              >
                {icon}
              </IconButton>
            </InputAdornment>
          )
        }
        label={label}
      />
    </FormControl>
  );
}
