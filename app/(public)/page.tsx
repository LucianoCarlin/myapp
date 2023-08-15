import React from 'react';
import { Box } from '@mui/material';
import { GridContainer } from '../components/Grid/GridContainer';
import { GridItem } from '../components/Grid/GridItem';
import { Item } from '../components/Item';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { WButton } from '../components/Button';

export default function states() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GridContainer>
        <GridItem md={1}>
          <Item>Grid 1</Item>
        </GridItem>
        <GridItem md={2}>
          <Item>Grid 2</Item>
        </GridItem>
        <GridItem md={3}>
          <Item>Grid 3</Item>
        </GridItem>
        <GridItem md={4}>
          <Item>Grid 4</Item>
        </GridItem>
        <GridItem md={2}>
          <Item>Grid 2</Item>
        </GridItem>
        <GridItem md={5}>
          <Item>Grid 5</Item>
        </GridItem>
        <GridItem md={6}>
          <Item>Grid 6</Item>
        </GridItem>
        <GridItem md={7}>
          <Item>Grid 7</Item>
        </GridItem>
        <GridItem md={8}>
          <Item>Grid 8</Item>
        </GridItem>
        <GridItem md={9}>
          <Item>Grid 9</Item>
        </GridItem>
        <GridItem md={10}>
          <Item>Grid 10</Item>
        </GridItem>
        <GridItem md={11}>
          <Item>Grid 11</Item>
        </GridItem>
        <GridItem md={12}>
          <Item>Grid 12</Item>
        </GridItem>
        <GridItem md={12}>
          <WButton textButton="Contained" />
        </GridItem>
      </GridContainer>
    </Box>
  );
}
