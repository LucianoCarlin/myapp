'use client';
import React, { Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import { Repo } from '@/app/components/Pages/Dashboard';

export default function Client() {
  return (
    <Suspense fallback={'loading cliente'}>
      <Box>
        <Typography>Dash</Typography>
        <Repo />
      </Box>
    </Suspense>
  );
}
