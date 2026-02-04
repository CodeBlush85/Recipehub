/*
  Import extendTheme from Chakra UI.
  This function is used to customize and extend
  Chakra UI's default theme configuration.
*/
import { extendTheme } from '@chakra-ui/react'

/*
  Color mode configuration.
  -------------------------
  - initialColorMode: 'system' means the app will
    follow the user's operating system preference
    (light or dark) on first load.
  - useSystemColorMode: true enables automatic
    detection of the OS color scheme.
*/
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

/*
  Create and export the custom theme object.
  This theme:
  - Applies the color mode configuration
  - Sets a custom font for headings and body text
  - Falls back to system fonts if the custom font fails to load
*/
export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', system-ui, sans-serif`,
    body: `'Inter', system-ui, sans-serif`,
  },
})
