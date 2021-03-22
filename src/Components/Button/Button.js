import React from 'react'

// 1. Import useStyleConfig
import { useStyleConfig } from "@chakra-ui/react"
function Button(props) {
  const { variant, ...rest } = props

  // 2. Reference `Button` stored in `theme.components`
  const styles = useStyleConfig("Button", {variant})

  // 3. Pass the computed styles into the `sx` prop
  return <Box as="button" sx={styles} {...rest} />
}

export default Button;