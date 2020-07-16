import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  type: 'light',
  typography: {
    fontFamily: "'Space Mono', 'monospace', 'Roboto'",
  },
  shadows: ['none'],
  sidebarWidth: 260,
  sidebarMobileHeight: 90,
})

const FantalkTheme = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>
}

export default FantalkTheme
