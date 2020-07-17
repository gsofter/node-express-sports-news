import { handleActions } from 'redux-actions'
import * as actions from './actions'
// import { setAccessToken, removeAccessToken } from '../../lib/cookie'

let initState = {
  teams: [],
  languages: [],
  myLanguage: 'EN',
}

const groupTeams = (teams) => {
  var groups = {}
  for (let i = 0; i < teams.length; i++) {
    var countryName = teams[i].country
    if (!groups[countryName]) {
      groups[countryName] = []
    }
    groups[countryName].push(teams[i])
  }
  let groupArray = []
  for (countryName in groups) {
    groupArray.push({ country: countryName, teams: groups[countryName] })
  }
  return groupArray
}

const reducer = handleActions(
  {
    [actions.INIT_TEAMS]: (state, action) => {
      const gTeams = groupTeams(action.payload)
      return {
        ...state,
        teams: gTeams,
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
  },
  initState,
)
export default reducer
