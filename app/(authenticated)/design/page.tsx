'use client';
import React from 'react';
import { Box } from '@mui/material';
import { GridContainer } from '../../components/Grid/GridContainer';
import { GridItem } from '../../components/Grid/GridItem';
import { WPaper } from '../../components/Paper';
import { WButton } from '../../components/Button';
import { WInput } from '../../components/Input/WInput';
import { WInputPassword } from '../../components/Input/WInputPassword';
import { WInputIcon } from '../../components/Input/WInputIcon';
import { WInputMask } from '../../components/Input/WInputMask';
import { WInputCurrency } from '../../components/Input/WInputCurrency';
import { WInputDecimal } from '../../components/Input/WInputDecimal';
import { WInputPercent } from '../../components/Input/WInputPercent';
import { Home } from '@mui/icons-material';
import Link from 'next/link';

export default function states() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Link href="/dashboard" passHref>
        Ir para dash
      </Link>
      <GridContainer sx={{ mb: '1rem' }}>
        <GridItem md={1}>
          <WPaper typePaper="dark">Grid 1</WPaper>
        </GridItem>
        <GridItem md={2}>
          <WPaper typePaper="dark">Grid 2</WPaper>
        </GridItem>
        <GridItem md={3}>
          <WPaper typePaper="dark">Grid 3</WPaper>
        </GridItem>
        <GridItem md={4}>
          <WPaper typePaper="dark">Grid 4</WPaper>
        </GridItem>
        <GridItem md={2}>
          <WPaper typePaper="dark">Grid 2</WPaper>
        </GridItem>
        <GridItem md={5}>
          <WPaper typePaper="dark">Grid 5</WPaper>
        </GridItem>
        <GridItem md={6}>
          <WPaper typePaper="dark">Grid 6</WPaper>
        </GridItem>
        <GridItem md={7}>
          <WPaper typePaper="dark">Grid 7</WPaper>
        </GridItem>
        <GridItem md={8}>
          <WPaper typePaper="dark">Grid 8</WPaper>
        </GridItem>
        <GridItem md={9}>
          <WPaper typePaper="dark">Grid 9</WPaper>
        </GridItem>
        <GridItem md={10}>
          <WPaper typePaper="dark">Grid 10</WPaper>
        </GridItem>
        <GridItem md={11}>
          <WPaper typePaper="dark">Grid 11</WPaper>
        </GridItem>
        <GridItem md={12}>
          <WPaper typePaper="dark">Grid 12</WPaper>
        </GridItem>
      </GridContainer>
      <GridContainer sx={{ mb: '1rem' }}>
        <GridItem md={2}>
          <WButton textButton="Contained error" color="error" fullWidth />
        </GridItem>
        <GridItem md={2}>
          <WButton textButton="Contained success" color="success" fullWidth />
        </GridItem>
        <GridItem md={2}>
          <WButton textButton="Contained warning" color="warning" fullWidth />
        </GridItem>
        <GridItem md={2}>
          <WButton
            textButton="Contained secondary"
            color="secondary"
            fullWidth
          />
        </GridItem>
        <GridItem md={2}>
          <WButton textButton="Contained info" color="info" fullWidth />
        </GridItem>
        <GridItem md={2}>
          <WButton textButton="Contained primary" color="primary" fullWidth />
        </GridItem>
        <GridItem md={2}>
          <WButton
            variant="outlined"
            textButton="outlined error"
            color="error"
            fullWidth
          />
        </GridItem>
        <GridItem md={2}>
          <WButton
            variant="outlined"
            textButton="outlined success"
            color="success"
            fullWidth
          />
        </GridItem>
        <GridItem md={2}>
          <WButton
            variant="outlined"
            textButton="outlined warning"
            color="warning"
            fullWidth
          />
        </GridItem>
        <GridItem md={2}>
          <WButton
            variant="outlined"
            textButton="outlined secondary"
            color="secondary"
            fullWidth
          />
        </GridItem>
        <GridItem md={2}>
          <WButton
            variant="outlined"
            textButton="outlined info"
            color="info"
            fullWidth
          />
        </GridItem>
        <GridItem md={2}>
          <WButton
            variant="outlined"
            textButton="outlined primary"
            color="primary"
            fullWidth
          />
        </GridItem>
      </GridContainer>
      <GridContainer sx={{ mb: '1rem' }}>
        <GridItem md={4}>
          <WInput name="teste" label="outlined" />
        </GridItem>
        <GridItem md={4}>
          <WInput name="teste" variant="filled" label="filled" />
        </GridItem>
        <GridItem md={4}>
          <WInput name="teste" variant="standard" label="standard" />
        </GridItem>
        <GridItem md={4}>
          <WInput name="teste" size="medium" label="outlined" />
        </GridItem>
        <GridItem md={4}>
          <WInput name="teste" variant="filled" size="medium" label="filled" />
        </GridItem>
        <GridItem md={4}>
          <WInput
            name="teste"
            variant="standard"
            size="medium"
            label="standard"
          />
        </GridItem>
      </GridContainer>
      <GridContainer sx={{ mb: '1rem' }}>
        <GridItem md={4}>
          <WInputPassword name="teste" label="Password" />
        </GridItem>
        <GridItem md={4}>
          <WInputIcon label="Icon" icon={<Home />} position="end" />
        </GridItem>
      </GridContainer>
      <GridContainer sx={{ mb: '1rem' }}>
        <GridItem md={3}>
          <WInputMask label="cfp" typeInput="cpf" />
        </GridItem>
        <GridItem md={3}>
          <WInputMask label="cnpj" typeInput="cnpj" />
        </GridItem>
        <GridItem md={3}>
          <WInputMask label="cep" typeInput="cep" />
        </GridItem>
        <GridItem md={3}>
          <WInputMask label="phone" typeInput="phone" />
        </GridItem>
      </GridContainer>
      <GridContainer sx={{ mb: '1rem' }}>
        <GridItem md={4}>
          <WInputCurrency label="currency" />
        </GridItem>
        <GridItem md={4}>
          <WInputDecimal label="decimal" />
        </GridItem>
        <GridItem md={4}>
          <WInputPercent label="percent" decimalScale={2} />
        </GridItem>
      </GridContainer>
    </Box>
  );
}
