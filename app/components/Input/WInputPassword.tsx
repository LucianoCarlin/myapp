"use client";
import React, { MouseEvent, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextFieldVariants,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormContext } from "react-hook-form";
interface WInputPasswordProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  name: string;
  size?: "small" | "medium";
  defaultValue?: string;
}

export function WInputPassword({
  label,
  name,
  size = "small",
  variant = "outlined",
  defaultValue,
  ...rest
}: WInputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth variant={variant} color="secondary" size={size}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        {...rest}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        defaultValue={defaultValue}
        error={!!errors[name]?.message}
        //helperText={errors[name]?.message && <>{errors[name]?.message}</>}
      />
    </FormControl>
  );
}
