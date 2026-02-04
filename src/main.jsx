/*
  Import React.
  React is required for JSX to work and provides core functionality.
*/
import React from 'react'

/*
  Import ReactDOM from the client entry.
  This is used to connect the React application to the HTML DOM.
*/
import ReactDOM from 'react-dom/client'

/*
  Import ChakraProvider and ColorModeScript from Chakra UI.
  - ChakraProvider makes Chakra UI available throughout the app
  - ColorModeScript ensures the correct color mode is applied on first load
*/
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

/*
  Import the root App component.
  This component controls which page is displayed.
*/
import { App } from './App'

/*
  Import the custom Chakra UI theme.
  This includes theme configuration such as color mode settings.
*/
import { theme } from './theme'

/*
  Find the HTML element with id="root" (defined in index.html)
  and render the React application inside it.
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  /*
    React.StrictMode helps detect potential problems
    during development. It does not affect production.
  */
  <React.StrictMode>
    {/*
      ChakraProvider wraps the entire application.
      This allows all components to use Chakra UI
      styling, layout, and theming features.
    */}
    <ChakraProvider theme={theme}>
      {/*
        ColorModeScript ensures that the correct
        light or dark mode is applied before the UI renders.
        This prevents a flash of incorrect color mode.
      */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {/* Render the root App component */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
