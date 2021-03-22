import React from "react";
import {
    Modal,
  } from "@chakra-ui/react";
 import ConfirmationDeleteModal from './ConfirmationModal'


  export  default{
    title: "Modal",
    component: Modal,
  }
  
  export const DeleteModal = () => <ConfirmationDeleteModal/>