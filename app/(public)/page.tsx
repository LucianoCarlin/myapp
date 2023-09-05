"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthHeader } from "../components/Auth/Auth.Header";
import { AuthCopyright } from "../components/Auth/Auth.Copyright";
import { AuthContainer } from "../components/Auth/Auth.Container";
import { WButton } from "../components/Button";
import { AuthLinks } from "../components/Auth/Auth.Links";
import { WInput } from "../components/Input/WInput";
import { WInputPassword } from "../components/Input/WInputPassword";
import { GridContainer } from "../components/Grid/GridContainer";
import { GridItem } from "../components/Grid/GridItem";
import { AuthCookie } from "../components/Auth/Auth.Cookie";
import { signInSchema } from "../schemas/Auth/Schema.SignIn";
import { WLoadingButton } from "../components/Button/Button.Loading";

interface SignInProps {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();
  const methods = useForm<SignInProps>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInProps> = async (values) => {
    setTimeout(() => {
      console.log(values);
    }, 5000);
  };

  console.log(methods.formState.errors, "oi");

  return (
    <FormProvider {...methods}>
      <AuthContainer>
        <AuthHeader />
        <Box
          component="form"
          onSubmit={methods.handleSubmit(handleSignIn)}
          noValidate
          sx={{ mt: "4rem" }}
        >
          <GridContainer>
            <GridItem sm={12} md={12}>
              <WInput
                {...methods.register("email")}
                label="Informe seu Email"
                name="email"
              />
            </GridItem>
            <GridItem sm={12} md={12}>
              <WInputPassword
                {...methods.register("password")}
                name="password"
                label="Informe sua Senha"
                defaultValue={""}
              />
            </GridItem>
          </GridContainer>
          <WLoadingButton
            loading={methods.formState.isLoading}
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
      </AuthContainer>
    </FormProvider>
  );
}
