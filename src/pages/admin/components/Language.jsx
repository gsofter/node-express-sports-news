import React from 'react'
import MaterialTable from 'material-table'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core'
import { tableIcons } from '../icons'
export default function Feed({ languages }) {
  const { useState } = React

  const [columns, setColumns] = useState([
    { title: 'Code', field: 'code' },
    { title: 'Name', field: 'name' },
  ])

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#ff9100',
      },
    },

    typography: {
      fontFamily: 'Roboto',
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ width: '100%' }}>
        <MaterialTable
          icons={tableIcons}
          title="Editable Preview"
          columns={columns}
          data={languages}
          options={{
            rowStyle: {
              fontFamily: 'Roboto',
            },
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve()
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const index = oldData.tableData.id

                  resolve()
                }, 1000)
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const index = oldData.tableData.id
                }, 1000)
              }),
          }}
        />
      </div>
    </MuiThemeProvider>
  )
}
