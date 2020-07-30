import React, { useState, useEffect } from 'react'
import HomePageComponent from '../components/HomePage'
import * as api from '../api'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
  const [loading, setLoading] = useState(true)
  const [fail, setFail] = useState(false)
  const [articles, setArticles] = useState([])
  const { language: languageCode } = useParams()
  const languages = useSelector((state) => state.languages)
  const language = languages.find((item) => item.code === languageCode)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getLanguageArticles(languageCode)
        setArticles(response.data)
        setLoading(false)
      } catch (e) {
        setFail(true)
      }
    }
    fetchData()
  }, [languageCode])
  return (
    <HomePageComponent
      language={language}
      articles={articles}
      loading={loading}
      fail={fail}
    />
  )
}

export default Home
