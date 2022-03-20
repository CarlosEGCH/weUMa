// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const theme = extendTheme({
  colors: {
    brand: {
    primary: '#FCF4F5',
    secondary: '#A3D4F1',
    accent: '#020F5D',
    extra: '#FCBB3F'
  }},
  fonts: {
    heading: 'Heading Font Name, sans-serif',
    body: 'Body Font Name, sans-serif',
  }});

// 3. extend the theme

export default theme