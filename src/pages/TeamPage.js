import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TeamPageComponent from '../components/TeamPage'
import * as api from '../api'
import useInit from '../hooks/useInit'
const TeamPage = () => {
  useInit()
  const myTeam = useSelector((state) => state.myTeam)
  const { teamName: teamStr } = useParams()
  const teamName = decodeURI(teamStr)
  const [loading, setLoading] = useState(true)
  const [fail, setFail] = useState(false)
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getTeamArticles(
          teamName,
          myTeam.keyword || '',
        )
        setArticles(response.data)
        setLoading(false)
      } catch (e) {
        setFail(true)
      }
    }
    fetchData()
  }, [teamName, myTeam])

  return (
    <TeamPageComponent
      team={myTeam}
      teamName={teamName}
      articles={articles}
      loading={loading}
      fail={fail}
    />
  )
}

export default TeamPage
