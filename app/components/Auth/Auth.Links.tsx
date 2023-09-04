import React from 'react';
import { Link } from '@mui/material';
import { GridContainer } from '../Grid/GridContainer';
import { GridItem } from '../Grid/GridItem';

export function AuthLinks() {
  return (
    <GridContainer>
      <GridItem md={12} sx={{ pt: 0 }}>
        <Link
          href="/auth/forgotPassword"
          variant="body2"
          underline="none"
          color="secondary"
          sx={{
            ':hover': {
              color: 'GrayText',
            },
          }}
        >
          Esqueceu sua senha?
        </Link>
      </GridItem>
      <GridItem md={12} sx={{ pt: '0.1rem !important' }}>
        <Link
          href="/auth/register"
          variant="body2"
          underline="none"
          color="secondary"
          sx={{
            ':hover': {
              color: 'GrayText',
            },
          }}
        >
          Cadastre-se e teste grátis por 7 dias!
        </Link>
      </GridItem>
    </GridContainer>
  );
}
