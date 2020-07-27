import React, { useEffect, useState, useCallback } from 'react'
import TeamComponent from '../components/Team'
import queryString from 'query-string'
import * as api from '../../../api'
import { useSnackbar } from 'notistack'
const Team = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const { country } = queryString.parse(window.location.search)
  const { enqueueSnackbar } = useSnackbar()
  const fetchData = useCallback(async () => {
    const response = await api.getTeams()
    const countryItem = response.data.find((team) => team.country === country)
    setTeams(countryItem.teams)
    setLoading(false)
  }, [country])

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [country, fetchData])

  const handleSubmit = async (data, newData) => {
    if (data._id) {
      try {
        await api.updateTeam(data._id, newData)
        enqueueSnackbar('Successfully updated', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        fetchData()
      } catch (err) {
        enqueueSnackbar('Update Error', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        console.log(err)
      }
    } else {
      try {
        await api.addTeam(country, newData)
        enqueueSnackbar('Successfully added', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        fetchData()
      } catch (err) {
        enqueueSnackbar('Add Error', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        console.log(err)
      }
    }
  }

  const handleRemove = async (data) => {
    try {
      await api.removeTeam(data._id)
      enqueueSnackbar('Successfully added', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
      fetchData()
    } catch (err) {
      enqueueSnackbar('Remove Error', {
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
    <TeamComponent
      teams={teams}
      loading={loading}
      handleSubmit={handleSubmit}
      handleRemove={handleRemove}
      country={country}
    />
  )
}

export default Team
