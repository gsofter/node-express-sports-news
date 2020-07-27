import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { tableIcons } from '../icons'
export default function LangFeed({
  langFeeds,
  addFeed,
  updateFeed,
  removeFeed,
}) {
  const [columns, setColumns] = useState([
    { title: 'Feed Name', field: 'feed_name' },
    { title: 'Feed URL', field: 'feed_url', type: 'url' },
    { title: 'Language', field: 'language' },
  ])

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ width: '100%' }}>
        <MaterialTable
          icons={tableIcons}
          title="Language Feed"
          columns={columns}
          data={langFeeds}
          options={{
            rowStyle: {
              fontFamily: 'Roboto',
            },
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                addFeed(newData, resolve, reject)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                updateFeed(oldData._id, newData, resolve, reject)
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                removeFeed(oldData._id, resolve, reject)
              }),
          }}
        />
      </div>
    </MuiThemeProvider>
  )
}
