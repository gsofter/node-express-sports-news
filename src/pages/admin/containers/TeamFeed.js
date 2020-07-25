import React, { useEffect, useState } from 'react'
import TeamFeedComponent from '../components/TeamFeed'
import * as api from '../../../api'
const TeamFeed = () => {
  const [teamFeeds, setTeamFeeds] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getTeamFeeds()
      setTeamFeeds(response.data)
      setLoading(false)
    }
    fetchData()
  }, [])
  return (
    <TeamFeedComponent loading={loading} langFeeds={[]} teamFeeds={teamFeeds} />
  )
}

export default TeamFeed
