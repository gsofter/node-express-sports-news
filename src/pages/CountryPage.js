import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CountryPageComponent from '../components/CountryPage'
import * as api from '../api'
const CountryPage = () => {
  const { countryName } = useParams()
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const countryData = useSelector((state) => state.teams)
  const banners = useSelector((state) => state.banners)
  const country = countryData.find((item) => item.country === countryName)
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
      country={country}
      articles={articles}
      loading={loading}
      banners={banners}
    />
  )
}

export default CountryPage
