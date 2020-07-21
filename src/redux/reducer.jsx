import { handleActions } from 'redux-actions'
import * as actions from './actions'
// import { setAccessToken, removeAccessToken } from '../../lib/cookie'

let initState = {
  teams: [],
  languages: [],
  myLanguage: 'en',
  myTeam: {},
}

const reducer = handleActions(
  {
    [actions.INIT_TEAMS]: (state, action) => {
      return {
        ...state,
        teams: action.payload,
      }
    },
    [actions.INIT_LANGUAGES]: (state, action) => {
      const languages = action.payload
      return {
        ...state,
        languages: languages,
      }
    },
    [actions.SET_MY_LANGUAGE]: (state, action) => {
      const language = action.payload
      return {
        ...state,
        myLanguage: language,
      }
    },
    [actions.SET_MY_TEAM]: (state, action) => {
      const team = action.payload
      return {
        ...state,
        myTeam: team,
      }
    },
  },
  initState,
)
export default reducer
