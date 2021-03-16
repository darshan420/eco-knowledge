import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => (
  <Button size="sm" variant="primary" bg="dayBreakBlue.6">
    Button
  </Button>
);
export const Danger = () => (
  <Button size="sm" variant="primary" bg="dustRed.5">
    Button
  </Button>
);

