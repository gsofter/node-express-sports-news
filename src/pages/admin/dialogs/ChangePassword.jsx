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
const ChangePassword = ({ open, onClose, handleSubmit }) => {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submit = (event) => {
    event.preventDefault()
    if (form.confirmPassword !== form.newPassword) setError(true)
    else handleSubmit(form)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="draggable-dialog-title"
      maxWidth="sm"
      className={classes.dialog}
    >
      <form noValidate autoComplete="off" className={classes.form}>
        <DialogTitle> Change Password </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Email address"
                fullWidth
                variant="outlined"
                required
                onChange={handleChange}
                value={form.email}
                name="email"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Old Password"
                fullWidth
                variant="outlined"
                required
                onChange={handleChange}
                value={form.oldPassword}
                name="oldPassword"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="New Password"
                fullWidth
                variant="outlined"
                required
                onChange={handleChange}
                value={form.newPassword}
                name="newPassword"
                error={error}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Confirm Password"
                fullWidth
                variant="outlined"
                required
                onChange={handleChange}
                value={form.confirmPassword}
                name="confirmPassword"
                error={error}
              />
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

export default ChangePassword
