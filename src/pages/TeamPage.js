import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TeamPageComponent from '../components/TeamPage'
import * as api from '../api'
const TeamPage = () => {
  const { teamName: teamStr } = useParams()
  const teamName = decodeURI(teamStr)
  const [loading, setLoading] = useState(true)
  const [fail, setFail] = useState(false)
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getTeamArticles(teamName)
        setArticles(response.data)
        setLoading(false)
      } catch (e) {
        setFail(true)
      }
    }
    fetchData()
  }, [teamName])
  return (
    <TeamPageComponent
      teamName={teamName}
      articles={articles}
      loading={loading}
      fail={fail}
    />
  )
}

export default TeamPage
