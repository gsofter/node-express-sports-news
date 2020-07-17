import React from 'react'
import { useParams } from 'react-router-dom'

const CountryPage = () => {
  let { countryName } = useParams()
  return <div>CountryPage --- {countryName}</div>
}

export default CountryPage
