import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export function AuthHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem',
      }}
    >
      <Image src="/logo/logoW.svg" alt="Logo Windel" width={250} height={100} />
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 500,
          lineHeight: 0,
          letterSpacing: '0.3rem',
          mt: '1rem',
        }}
      >
        Windel
      </Typography>
      <Typography
        sx={{
          fontSize: '0.8rem',
          fontWeight: 400,
          lineHeight: 0,
          letterSpacing: '0.025rem',
          mt: '1.2rem',
        }}
      >
        sistemas de gestão
      </Typography>
    </Box>
  );
}
