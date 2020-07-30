import React, { useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
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
  imagePreview: {
    width: '100px',
    height: '100px',
    border: '1px solid #ccc',
    '& img': {
      width: 'inherit',
    },
  },
  placeholder: {
    width: '100px',
    height: '100px',
    border: '1px solid #ccc',
  },
}))
const TeamDialog = ({ open, onClose, data, handleSubmit }) => {
  const classes = useStyles()
  const [form, setForm] = useState({})
  const [iconPreview, setIconPreview] = useState('')
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: async (acceptedFiles) => {
      const files = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      )
      try {
        const uploadResponse = await api.uploadIcon(files[0])
        const filePath = uploadResponse.data
        setIconPreview(filePath)
        setForm({
          ...form,
          icon: filePath,
        })
      } catch (err) {
        console.log('err', err)
      }
    },
  })

  useEffect(() => {
    setForm({
      name: data.name || '',
      meta_title: data.meta_title || '',
      meta_description: data.meta_description || '',
      intro_text: data.intro_text || '',
      footer_text: data.footer_text || '',
      spon_text: data.spon_text || '',
      spon_link: data.spon_link || '',
      icon: data.icon || '',
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
        <DialogTitle> {data._id ? 'Edit' : 'Add'} Team </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Team Name"
                fullWidth
                required
                variant="outlined"
                onChange={handleChange}
                value={form.name}
                name="name"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? <p> Select Icon ...</p> : <p> Select Icon</p>}
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              {iconPreview ? (
                <div className={classes.imagePreview}>
                  <img src={iconPreview} alt="icon preview" />
                </div>
              ) : (
                <div className={classes.placeholder}></div>
              )}
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
                label="Intro Text"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                onChange={handleChange}
                value={form.intro_text}
                name="intro_text"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Footer Text"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                onChange={handleChange}
                value={form.footer_text}
                name="footer_text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sponsor Text"
                type="url"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={form.spon_text}
                name="spon_text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sponsor URL"
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

export default TeamDialog
