import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core'
import { tableIcons } from '../icons'

export default function Language({
  languages,
  addNewLanguage,
  updateLanguage,
  removeLanguage,
}) {
  const [columns, setColumns] = useState([
    { title: 'Code', field: 'code' },
    { title: 'Name', field: 'name' },
    { title: 'Meta Title', field: 'meta_title' },
    { title: 'Meta Description', field: 'meta_description' },
    { title: 'Intro Text', field: 'intro_text' },
    { title: 'Footer Text', field: 'footer_text' },
    { title: 'Sponsor Text', field: 'spon_text' },
    { title: 'Sponser Link', field: 'spon_link' },
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
          title="Languages"
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
                addNewLanguage(newData, resolve, reject)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                updateLanguage(oldData._id, newData, resolve, reject)
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                removeLanguage(oldData._id, resolve, reject)
              }),
          }}
        />
      </div>
    </MuiThemeProvider>
  )
}
