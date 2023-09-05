import * as React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export function AuthHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: {
          xs: "5rem",
          sm: "5rem",
          md: "5rem",
          lg: "5rem",
          xl: "8rem",
        },
      }}
    >
      <Image src="/logo/logoW.svg" alt="Logo Windel" width={300} height={120} />
      <Typography
        sx={{
          fontSize: "4rem",
          fontWeight: 400,
          lineHeight: 0,
          letterSpacing: "0.3rem",
          mt: "1rem",
        }}
      >
        Windel
      </Typography>
      <Typography
        sx={{
          fontSize: "0.9rem",
          fontWeight: 500,
          lineHeight: 0,
          letterSpacing: "0.2rem",
          mt: "2rem",
        }}
      >
        sistemas de gestão
      </Typography>
    </Box>
  );
}
