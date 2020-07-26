import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  makeStyles,
  MenuItem,
  Button,
  DialogActions,
} from '@material-ui/core'
import * as api from '../../../api'
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  dialog: {
    padding: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginLeft: 'auto',
  },
}))
const Country = ({ open, onClose, languages, isEdit, data, handleSubmit }) => {
  const classes = useStyles()
  const [form, setForm] = useState({
    country: data._id ? data.country : '',
    language: data._id ? data.language : '',
  })

  useEffect(() => {
    setForm({
      country: data._id ? data.country : '',
      language: data._id ? data.language : '',
    })
  }, [data])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submit = (event) => {
    event.preventDefault()
    handleSubmit(data, form)
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="draggable-dialog-title"
      maxWidth="md"
      className={classes.dialog}
    >
      <form noValidate autoComplete="off" className={classes.form}>
        <DialogTitle> {data._id ? 'Edit' : 'Add'} Country </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Country"
                fullWidth
                required
                onChange={handleChange}
                value={form.country}
                name="country"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Language"
                fullWidth
                required
                name="language"
                onChange={handleChange}
                value={form.language}
              >
                {languages.map((option) => (
                  <MenuItem key={option.name} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={submit}
          >
            Submit
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default Country
