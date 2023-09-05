'use client';
import React from 'react';
import { Typography } from '@mui/material';
import { GridContainer } from '../Grid/GridContainer';
import { GridItem } from '../Grid/GridItem';
import Link from 'next/link';

export function AuthLinks() {
  return (
    <GridContainer>
      <GridItem sm={12} md={12} sx={{ pt: 0 }}>
        <Link href="/auth/forgot" legacyBehavior passHref>
          <a style={{ textDecoration: 'none' }}>
            <Typography
              variant="body2"
              color="secondary"
              sx={{
                ':hover': {
                  color: 'GrayText',
                  cursor: 'pointer',
                },
              }}
            >
              Esqueceu sua senha?
            </Typography>
          </a>
        </Link>
      </GridItem>
      <GridItem sm={12} md={12} sx={{ pt: '0.2rem !important' }}>
        <Link href="/auth/register" legacyBehavior passHref>
          <a style={{ textDecoration: 'none' }}>
            <Typography
              variant="body2"
              color="secondary"
              sx={{
                ':hover': {
                  color: 'GrayText',
                  cursor: 'pointer',
                },
              }}
            >
              Cadastre-se e teste grátis por 7 dias!
            </Typography>
          </a>
        </Link>
      </GridItem>
    </GridContainer>
  );
}
