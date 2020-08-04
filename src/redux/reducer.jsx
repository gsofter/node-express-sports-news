import { handleActions } from 'redux-actions'
import * as actions from './actions'
// import { setAccessToken, removeAccessToken } from '../../lib/cookie'

let initState = {
  teams: [],
  languages: [],
  banners: [],
  myLanguage: 'en',
  myTeam: {},
  admin_token: null,
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
    [actions.INIT_BANNERS]: (state, action) => {
      const banners = action.payload
      return {
        ...state,
        banners: banners,
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
    [actions.LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        admin_token: action.payload,
      }
    },
    [actions.LOGIN_FAILED]: (state, action) => {
      return {
        ...state,
        admin_token: null,
      }
    },
  },
  initState,
)
export default reducer
