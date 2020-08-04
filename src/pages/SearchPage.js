import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchPageComponent from '../components/SearchPage'
import * as api from '../api'
import useInit from '../hooks/useInit'
const SearchPage = () => {
  const { searchText: searchStr, language } = useParams()
  const searchText = decodeURI(searchStr)
  const [loading, setLoading] = useState(true)
  const [fail, setFail] = useState(false)
  const [articles, setArticles] = useState([])
  useInit()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getSearchArticles(language, searchText)
        setArticles(response.data)
        setLoading(false)
      } catch (e) {
        setFail(true)
      }
    }
    fetchData()
  }, [language, searchText])

  return (
    <SearchPageComponent
      searchText={searchText}
      articles={articles}
      loading={loading}
      fail={fail}
    />
  )
}

export default SearchPage
