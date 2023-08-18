import React from 'react';
import { Box } from '@mui/material';
import { GridContainer } from '../components/Grid/GridContainer';
import { GridItem } from '../components/Grid/GridItem';
import { Item } from '../components/Item';
import { WButton } from '../components/Button';
import { WInput } from '../components/Input/WInput';

export default function states() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
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
          <WButton textButton="Contained gray" color="inherit" fullWidth />
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
            textButton="outlined gray"
            color="inherit"
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
        <GridItem md={4}>
          <WInput label="outlined" />
        </GridItem>
        <GridItem md={4}>
          <WInput variant="filled" label="filled" />
        </GridItem>
        <GridItem md={4}>
          <WInput variant="standard" label="standard" />
        </GridItem>
        <GridItem md={4}>
          <WInput size="medium" label="outlined" />
        </GridItem>
        <GridItem md={4}>
          <WInput variant="filled" size="medium" label="filled" />
        </GridItem>
        <GridItem md={4}>
          <WInput variant="standard" size="medium" label="standard" />
        </GridItem>
      </GridContainer>
    </Box>
  );
}
