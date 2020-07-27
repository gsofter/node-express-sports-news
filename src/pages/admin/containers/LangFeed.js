/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react'
import LangFeedComponent from '../components/LangFeed'
import * as api from '../../../api'
import { useSnackbar } from 'notistack'
const LangFeed = () => {
  const [langFeeds, setLangFeeds] = useState([])
  const [loading, setLoading] = useState(true)
  const { enqueueSnackbar } = useSnackbar()
  const fetchData = useCallback(async () => {
    const response = await api.getLangFeeds()
    setLangFeeds(response.data)
    setLoading(false)
  })

  useEffect(() => {
    fetchData()
  }, [])

  const addFeed = (newData, resolve, reject) => {
    const func = async () => {
      try {
        await api.addLangFeed(newData)
        fetchData()
        enqueueSnackbar('Successfully added', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        resolve()
      } catch (error) {
        enqueueSnackbar('Remove Failed', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        reject(error)
      }
    }
    func()
  }

  const updateFeed = (feedId, newData, resolve, reject) => {
    const func = async () => {
      try {
        await api.updateLangFeed(feedId, newData)
        fetchData()
        enqueueSnackbar('Successfully updated', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        resolve()
      } catch (error) {
        enqueueSnackbar('Update Failed', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        reject(error)
      }
    }
    func()
  }
  const removeFeed = (feedId, resolve, reject) => {
    const func = async () => {
      try {
        await api.removeLangFeed(feedId)
        fetchData()
        enqueueSnackbar('Successfully removed', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        resolve()
      } catch (error) {
        enqueueSnackbar('Remove Failed', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        reject(error)
      }
    }
    func()
  }

  return (
    <LangFeedComponent
      loading={loading}
      langFeeds={langFeeds}
      addFeed={addFeed}
      removeFeed={removeFeed}
      updateFeed={updateFeed}
    />
  )
}

export default LangFeed
