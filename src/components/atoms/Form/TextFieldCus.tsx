import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

interface TextFieldCusProps {
  label: string;
  mb?: number
  type?: "text" | "password" | "email" | "number";
}

export default function TextFieldCus({ label, type = "text", mb = 2  }: TextFieldCusProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      label={label}
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      fullWidth
      sx={{ mb, bgcolor: "#E2E2E2" }}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
}
