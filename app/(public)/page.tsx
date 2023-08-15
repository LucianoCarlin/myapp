import React from "react";
import { Box } from "@mui/material";
import { GridContainer } from "../components/Grid/GridContainer";
import { GridItem } from "../components/Grid/GridItem";
import { Item } from "../components/Item";

export default function states() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GridContainer>
        <GridItem md={1}>
          <Item>Grid 1</Item>
        </GridItem>
        <GridItem md={2} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={3} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={4} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={5} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={6} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={7} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={8} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={9} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={10} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={11} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
        <GridItem md={12} className="bg-purple-700">
          <Box height={4} className="bg-purple-700">
            grid 1
          </Box>
        </GridItem>
      </GridContainer>
    </Box>
  );
}
