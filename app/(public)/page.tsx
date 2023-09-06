'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthHeader } from '../components/Auth/Auth.Header';
import { AuthCopyright } from '../components/Auth/Auth.Copyright';
import { AuthContainer } from '../components/Auth/Auth.Container';
import { AuthLinks } from '../components/Auth/Auth.Links';
import { WInput } from '../components/Input/WInput';
import { WInputPassword } from '../components/Input/WInputPassword';
import { GridContainer } from '../components/Grid/GridContainer';
import { GridItem } from '../components/Grid/GridItem';
import { AuthCookie } from '../components/Auth/Auth.Cookie';
import { WLoadingButton } from '../components/Button/Button.Loading';
import { signInSchema } from '../schemas/Auth/Schema.SignIn';
import { SignInProps } from '../interface/interface.SignIn';
import axios from 'axios';
import { LoginRequest } from '../context/loginRequest';
import { Grid, Paper, colors } from '@mui/material';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInProps> = async (values) => {
    const returnaAuth = await LoginRequest(values.email, values.password);
    console.log(returnaAuth);
    //router.push('/dashboard');
  };

  return (
    <AuthContainer>
      <Grid
        item
        xs={false}
        sm={false}
        md={7}
        component={Paper}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 0,
        }}
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        sx={{ backgroundColor: colors.blueGrey[50] }}
      >
        <Box
          sx={{
            mt: { xs: '4rem', sm: '8rem', md: '16rem' },
            mx: { xs: 4, sm: 12, md: 8 },
            p: { xs: 1, sm: 0 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.blueGrey[50],
          }}
        >
          <AuthHeader />
          <Box
            component="form"
            onSubmit={handleSubmit(handleSignIn)}
            noValidate
            sx={{ mt: '4rem' }}
          >
            <GridContainer>
              <GridItem sm={12} md={12}>
                <WInput
                  {...register('email')}
                  label="Informe seu Email"
                  name="email"
                  error={errors.email}
                />
              </GridItem>
              <GridItem sm={12} md={12}>
                <WInputPassword
                  {...register('password')}
                  name="password"
                  label="Informe sua Senha"
                  error={errors.password}
                />
              </GridItem>
            </GridContainer>
            <WLoadingButton
              position="end"
              color="primary"
              fullWidth
              textButton="Acessar"
              sx={{ mt: 2, mb: 2 }}
              type="submit"
            />
            <AuthLinks />
          </Box>
          <AuthCopyright />
          <AuthCookie />
        </Box>
      </Grid>
    </AuthContainer>
  );
}
