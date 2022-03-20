// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const colors = {
  brand: {
    primary: '#FCF4F5',
    secondary: '#A3D4F1',
    accent: '#020F5D',
    extra: '#FCBB3F'
  }
}

// 3. extend the theme
const theme = extendTheme({ colors })

export default theme