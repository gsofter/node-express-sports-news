import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HomePageComponent from '../components/HomePage'
import * as api from '../api'
import { useParams } from 'react-router-dom'
const Home = () => {
  const [loading, setLoading] = useState(true)
  const [fail, setFail] = useState(false)
  const [articles, setArticles] = useState([])
  const { language: myLanguage } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getLanguageArticles(myLanguage)
        setArticles(response.data)
        setLoading(false)
      } catch (e) {
        setFail(true)
      }
    }
    fetchData()
  }, [myLanguage])
  return <HomePageComponent articles={articles} loading={loading} fail={fail} />
}

export default Home
