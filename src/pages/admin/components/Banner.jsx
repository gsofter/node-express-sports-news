import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import deepcopy from 'deepcopy'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  form: {},
}))
const Banner = ({ banners, updateBanners }) => {
  const classes = useStyles()

  const [form, setForm] = useState(banners)
  useEffect(() => {
    setForm(banners)
  }, [banners])

  const handleChange = (event, index, type) => {
    const tempBanners = deepcopy(form)
    tempBanners[index] = {
      ...tempBanners[index],
      [type]: event.target.value,
    }
    setForm(tempBanners)
  }

  const onUpdateBanner = (event) => {
    updateBanners(form)
  }

  const onResetBanner = (event) => {
    setForm(banners)
  }
  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off" className={classes.form}>
        <Grid container spacing={2}>
          {form.map((banner, index) => {
            return (
              <>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h5"> POSITION {index + 1}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"> Desktop </Typography>
                  <textarea
                    value={banner.desktop}
                    rows={10}
                    style={{ width: '100%' }}
                    onChange={(e) => handleChange(e, index, 'desktop')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"> Mobile </Typography>
                  <textarea
                    value={banner.mobile}
                    rows={10}
                    style={{ width: '100%' }}
                    onChange={(e) => handleChange(e, index, 'mobile')}
                  />
                </Grid>
              </>
            )
          })}
          <Grid item xs={12} sm={6}>
            <Button
              onClick={onUpdateBanner}
              type="submit"
              variant="contained"
              color="primary"
            >
              Update
            </Button>

            <Button
              onClick={onResetBanner}
              type="submit"
              variant="contained"
              color="seconday"
            >
              RESET
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Banner
