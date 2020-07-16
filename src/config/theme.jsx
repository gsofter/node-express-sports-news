import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  type: 'light',
  palette: {
    primary: {
      main: '#f52d18',
    },
  },
  shadows: ['none'],
})

const FantalkTheme = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>
}

export default FantalkTheme
