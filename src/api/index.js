import { API_ENDPOINT } from '../config/settings'
import axios from 'axios'

export const getTeams = async () => {
  return await axios.get(`${API_ENDPOINT}/teams`)
}

export const getLanguages = async () => {
  return await axios.get(`${API_ENDPOINT}/languages`)
}

export const getCountryArticles = async (countryName) => {
  return await axios.get(`${API_ENDPOINT}/articles/country/${countryName}`)
}

export const getTeamArticles = async (teamName) => {
  return await axios.get(`${API_ENDPOINT}/articles/team/${teamName}`)
}

export const getLanguageArticles = async (languageCode) => {
  return await axios.get(`${API_ENDPOINT}/articles/language/${languageCode}`)
}

export const getSearchArticles = async (languageCode, searchText) => {
  return await axios.get(`${API_ENDPOINT}/articles/search/`, {
    params: {
      languageCode,
      searchText,
    },
  })
}

// admin routes
export const getLangFeeds = async () => {
  return await axios.get(`${API_ENDPOINT}/feeds/lang`)
}

export const addLangFeed = async (newData) => {
  return await axios.post(`${API_ENDPOINT}/feeds/lang`, newData)
}

export const updateLangFeed = async (feedId, newData) => {
  return await axios.patch(`${API_ENDPOINT}/feeds/lang/${feedId}`, newData)
}

export const removeLangFeed = async (feedId) => {
  return await axios.delete(`${API_ENDPOINT}/feeds/lang/${feedId}`)
}

export const getTeamFeeds = async () => {
  return await axios.get(`${API_ENDPOINT}/feeds/team`)
}

export const addTeamFeed = async (newData) => {
  return await axios.post(`${API_ENDPOINT}/feeds/team`, newData)
}

export const updateTeamFeed = async (feedId, newData) => {
  return await axios.patch(`${API_ENDPOINT}/feeds/team/${feedId}`, newData)
}

export const removeTeamFeed = async (feedId) => {
  return await axios.delete(`${API_ENDPOINT}/feeds/team/${feedId}`)
}

export const addNewLanguage = async (newData) => {
  return await axios.post(`${API_ENDPOINT}/lang/new`, newData)
}

export const updateLanguage = async (langId, newData) => {
  return await axios.post(`${API_ENDPOINT}/lang/update`, { langId, newData })
}

export const removeLanguage = async (langId) => {
  return await axios.delete(`${API_ENDPOINT}/lang/${langId}`)
}

export const addNewCountry = async (newData) => {
  return await axios.post(`${API_ENDPOINT}/country`, newData)
}

export const updateCountry = async (countryId, newData) => {
  return await axios.patch(`${API_ENDPOINT}/country/${countryId}`, newData)
}

export const removeCountry = async (countryId) => {
  return await axios.delete(`${API_ENDPOINT}/country/${countryId}`)
}

export const addTeam = async (country, newData) => {
  return await axios.post(`${API_ENDPOINT}/team/${country}`, newData)
}

export const updateTeam = async (teamId, newData) => {
  return await axios.patch(`${API_ENDPOINT}/team/${teamId}`, newData)
}

export const removeTeam = async (teamId) => {
  return await axios.delete(`${API_ENDPOINT}/team/${teamId}`)
}

export const getBanners = async () => {
  return await axios.get(`${API_ENDPOINT}/banner`)
}

export const updateBanners = async (newData) => {
  return await axios.post(`${API_ENDPOINT}/banner`, newData)
}
export const removeBanner = async (newData) => {
  return await axios.post(`${API_ENDPOINT}/banner`, newData)
}

export const uploadIcon = async (file) => {
  const formData = new FormData()
  formData.append('icon', file)
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  }
  return await axios.post(`${API_ENDPOINT}/upload`, formData, config)
}

export const login = async (form) => {
  return await axios.post(`${API_ENDPOINT}/login`, form)
}
