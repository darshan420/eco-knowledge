import { ChakraProvider, theme}  from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from 'react';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={theme}>
      <Box m="4">
        <Story />
      </Box>
     </ChakraProvider>
  ),
];
