import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CountryPageComponent from '../components/CountryPage'
import * as api from '../api'
const CountryPage = () => {
  const { countryName } = useParams()
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getCountryArticles(countryName)
      setArticles(response.data)
      setLoading(false)
    }
    fetchData()
  }, [countryName])
  return (
    <CountryPageComponent
      country={countryName}
      articles={articles}
      loading={loading}
    />
  )
}

export default CountryPage
