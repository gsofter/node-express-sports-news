import { API_ENDPOINT } from '../config/settings'
import axios from 'axios'
/**
 *
 * Return identity and twilio_token for user corresponding to passcode
 *
 * @param passcode string
 * @return {* access_code: string, identity: string, token: string }
 */
export const getTeams = async () => {
  console.log('API_ENDPOINT ====> ', API_ENDPOINT)
  return await axios.get(`${API_ENDPOINT}/teams`)
}
