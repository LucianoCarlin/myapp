import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Coffee, Favorite } from '@mui/icons-material';

export function AuthCopyright() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: '0.5rem',
      }}
    >
      <Typography
        color="secondary"
        textAlign="center"
        sx={{
          fontSize: { xs: '0.8rem', sm: '0.9rem' },
        }}
      >
        Windel Sistemas 1.0.0.0
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          color="secondary"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
          }}
        >
          Feito com
        </Typography>
        <Favorite color="error" sx={{ marginX: '0.2rem' }} />
        <Typography
          color="secondary"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
          }}
        >
          e muito
        </Typography>
        <Coffee color="secondary" sx={{ marginX: '0.2rem' }} />
        <Typography
          color="secondary"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
          }}
        >
          pela Windel Sistemas
        </Typography>
      </Box>
    </Box>
  );
}
