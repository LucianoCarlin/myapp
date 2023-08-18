import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { WInput, WInputProps } from "./Winput";

interface WPasswordInputProps
  extends Omit<WInputProps<"outlined">, "inputProps"> {
  // Add any additional props specific to WPasswordInput here
}

export function WPasswordInput({
  label,
  size = "medium",
  ...rest
}: WPasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const passwordEndIcon = (
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      edge="end"
    >
      {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
    </IconButton>
  );

  return (
    <WInput
      label={label}
      size={size}
      type={showPassword ? "text" : "password"}
      inputProps={{
        endAdornment: passwordEndIcon,
      }}
      {...rest}
    />
  );
}
