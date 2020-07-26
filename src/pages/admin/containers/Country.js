import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CountryComponent from '../components/Country'
import * as api from '../../../api'
import { loadTeams } from '../../../redux/actions'
const Country = () => {
  const countries = useSelector((state) => state.teams)
  const languages = useSelector((state) => state.languages)
  const dispatch = useDispatch()
  const handleSubmit = async (data, newData) => {
    if (data._id) {
      try {
        await api.updateCountry(data._id, newData)
        dispatch(loadTeams())
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await api.addNewCountry(newData)
        dispatch(loadTeams())
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleRemove = async (data) => {
    try {
      await api.removeCountry(data._id)
      dispatch(loadTeams())
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <CountryComponent
      countries={countries}
      languages={languages}
      handleSubmit={handleSubmit}
      handleRemove={handleRemove}
    />
  )
}

export default Country
