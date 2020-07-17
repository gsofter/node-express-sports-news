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
  return await axios.get(`${API_ENDPOINT}/articles/team/${languageCode}`)
}
