import React from 'react'
import { Button } from "@chakra-ui/react"

export default{
    title:'Button',
    component:Button,
    
}

 export const Primary = () =>  <Button size="sm" variant="primary" bg="dayBreakBlue.6">Button</Button>
 export const Secondary = () => <Button  colorScheme="red" variant="solid">Button</Button>
 export const Success = () => <Button colorScheme="gray">Success</Button>
// export const Danger = () => <Button variant='danger'>Danger</Button>

