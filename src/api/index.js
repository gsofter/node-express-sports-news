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
export const getTeamFeeds = async () => {
  return await axios.get(`${API_ENDPOINT}/feeds/team`)
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
