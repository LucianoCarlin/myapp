'use client';
import React, { Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import LoadingDash from '../loading';
import { Repo } from '@/app/components/Pages/Dashboard';

export default function Dash() {
  return (
    <Suspense fallback={<LoadingDash />}>
      <Box>
        <Typography>Dash</Typography>
        <Repo />
      </Box>
    </Suspense>
  );
}
