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
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInProps> = async (values) => {
    router.push('/dashboard');
    /* setTimeout(() => {
      console.log(values);
      reset();
    }, 5000); */
  };

  return (
    <AuthContainer>
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
      </Box>
      <AuthLinks />
      <AuthCopyright />
      <AuthCookie />
    </AuthContainer>
  );
}
