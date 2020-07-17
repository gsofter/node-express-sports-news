import { createAction } from 'redux-actions'
import * as api from '../api'
export const INIT_TEAMS = 'INIT_TEAMS'
export const initTeams = createAction(INIT_TEAMS)

export const loadTeams = () => async (dispatch) => {
  try {
    const res = await api.getTeams()
    console.log('res ====> ', res.data)
    dispatch(initTeams(res.data))
  } catch (e) {
    console.log('Error ====> ', e.message)
    dispatch(initTeams([]))
    throw e
  }
}
