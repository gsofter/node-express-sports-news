import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HomePageComponent from '../components/HomePage'
import * as api from '../api'
const Home = () => {
  const myLanguage = useSelector((state) => state.myLanguage)
  const [loading, setLoading] = useState(true)
  const [fail, setFail] = useState(false)
  const [articles, setArticles] = useState([])
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
  }, [])
  return <HomePageComponent articles={articles} loading={loading} fail={fail} />
}

export default Home
