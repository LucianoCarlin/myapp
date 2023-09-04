import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface AuthContainerProps {
  children: ReactNode;
}

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 1,
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
