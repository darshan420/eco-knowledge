// import './App.css';
import React from "react";
import { Button } from "@chakra-ui/react"
import { Container, Box,Text } from "@chakra-ui/react"
import ConfirmationModal from './Components/Modal/ConfirmationModal/ConfirmationModal'
function App() {
  return (
    <>
    <Container centerContent mt={3}>
      <ConfirmationModal/>
    </Container>
    </>
  )
}
export default App;
