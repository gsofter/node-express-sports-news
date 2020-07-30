/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from 'react'
import * as api from '../../../api'
import BannerComponent from '../components/Banner'
import { useSnackbar } from 'notistack'
const Banner = () => {
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const fetchData = useCallback(async () => {
    const response = await api.getBanners()
    console.log('response.data', response.data)
    setBanners(response.data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const updateBanners = async (banners) => {
    try {
      await api.updateBanners(banners)
      enqueueSnackbar('Banners successfully updated!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    } catch (err) {
      enqueueSnackbar('Update Error', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
      console.log('err', err)
    }
  }
  return (
    <BannerComponent
      banners={banners}
      loading={loading}
      updateBanners={updateBanners}
    />
  )
}

export default Banner
