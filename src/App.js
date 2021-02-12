// import './App.css';
import React from "react";
import { Button } from "@chakra-ui/react";
import { Container, Box } from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"
function App() {
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box padding="4" display="grid" gridGap={2}  maxW="3xl">
        <Button colorScheme="red">Button</Button>
        <Progress value={80} />
        </Box>
      </Container>
    </>
  )
}
export default App;
