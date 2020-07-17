import { API_ENDPOINT } from '../config/settings'
import axios from 'axios'
/**
 *
 * Get Teams
 *
 */
export const getTeams = async () => {
  return await axios.get(`${API_ENDPOINT}/teams`)
}

/**
 *
 * Get Articles for country
 * @param String countryName
 */
export const getCountryArticles = async (countryName) => {
  return await axios.get(`${API_ENDPOINT}/articles/country/${countryName}`)
}
