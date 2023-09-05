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
import { signInSchema } from '../schemas/Auth/Schema.SignIn';
import { WLoadingButton } from '../components/Button/Button.Loading';

interface SignInProps {
  email: string;
  password: string;
}

export default function SignIn() {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInProps> = async (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(values);
    }, 5000);
  };
  console.log(errors);
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
          loading={loading}
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
