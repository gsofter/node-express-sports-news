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
  const [form, setForm] = useState({})

  useEffect(() => {
    setForm({
      country: data.country || '',
      language: data.language || '',
      meta_title: data.meta_title || '',
      meta_description: data.meta_description || '',
      intro_title: data.intro_title || '',
      intro_text: data.intro_text || '',
      footer_text: data.footer_text || '',
      spon_text: data.spon_text || '',
      spon_link: data.spon_link || '',
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
                variant="outlined"
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
                variant="outlined"
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
            <Grid item xs={12} sm={6}>
              <TextField
                label="Meta Title"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={form.meta_title}
                name="meta_title"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Meta Description"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={form.meta_description}
                name="meta_description"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Intro Title"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={form.intro_title}
                name="intro_title"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Intro Text"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                onChange={handleChange}
                value={form.intro_text}
                name="intro_text"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Footer Text"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                onChange={handleChange}
                value={form.footer_text}
                name="footer_text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sponser Text"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={form.spon_text}
                name="spon_text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sponser Link"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={form.spon_link}
                name="spon_link"
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

export default Country
