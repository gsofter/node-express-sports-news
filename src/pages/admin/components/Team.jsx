import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { tableIcons } from '../icons'
import { confirmAlert } from 'react-confirm-alert'
import TeamDialog from '../dialogs/TeamDialog'

export default function Team({ country, teams, handleSubmit, handleRemove }) {
  const [columns, setColumns] = useState([
    { title: 'Team Name', field: 'name' },
    { title: 'Icon', field: 'icon' },
    { title: 'Meta Title', field: 'meta_title' },
    { title: 'Meta Description', field: 'meta_description' },
    { title: 'Intro Text', field: 'intro_text' },
    { title: 'Footer Text', field: 'footer_text' },
    { title: 'Sponsor Text', field: 'spon_text' },
    { title: 'Sponsor Link', field: 'spon_link' },
  ])

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  })

  const [selected, setSelected] = useState({})
  const [open, setOpen] = useState(false)
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ width: '100%' }}>
        <MaterialTable
          icons={tableIcons}
          title={`${country} Team`}
          columns={columns}
          data={teams}
          options={{
            rowStyle: {
              fontFamily: 'Roboto',
            },
          }}
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit Team',
              onClick: (event, rowData) => {
                setSelected(rowData)
                setOpen(true)
              },
            },
            {
              icon: 'delete',
              tooltip: 'Delete Team',
              onClick: (event, rowData) =>
                confirmAlert({
                  title: 'Confirm to delete',
                  message: 'Are you sure to do this.',
                  buttons: [
                    {
                      label: 'Delete',
                      onClick: () => handleRemove(rowData),
                    },
                    {
                      label: 'Cancel',
                    },
                  ],
                }),
            },
            {
              icon: 'add',
              isFreeAction: true,
              onClick: () => {
                setSelected({})
                setOpen(true)
              },
            },
          ]}
        />
        <TeamDialog
          data={selected}
          open={open}
          onClose={() => setOpen(false)}
          handleSubmit={handleSubmit}
        />
      </div>
    </MuiThemeProvider>
  )
}
