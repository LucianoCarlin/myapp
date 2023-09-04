'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { AuthHeader } from '../components/Auth/Auth.Header';
import { AuthCopyright } from '../components/Auth/Auth.Copyright';
import { AuthContainer } from '../components/Auth/Auth.Container';
import { WButton } from '../components/Button';
import { AuthLinks } from '../components/Auth/Auth.Links';
import { WInput } from '../components/Input/WInput';
import { WInputPassword } from '../components/Input/WInputPassword';
import { GridContainer } from '../components/Grid/GridContainer';
import { GridItem } from '../components/Grid/GridItem';

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <AuthContainer>
      <AuthHeader />
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: '5rem' }}
      >
        <GridContainer>
          <GridItem sm={12} md={12}>
            <WInput label="Informe seu Email" />
          </GridItem>
          <GridItem sm={12} md={12}>
            <WInputPassword label="Informe sua Senha" />
          </GridItem>
        </GridContainer>
        <WButton
          color="primary"
          fullWidth
          textButton="Acessar"
          sx={{ mt: 2, mb: 2 }}
        />
        <AuthLinks />
      </Box>
      <AuthCopyright />
    </AuthContainer>
  );
}
