import { handleActions } from 'redux-actions'
import * as actions from './actions'
// import { setAccessToken, removeAccessToken } from '../../lib/cookie'

let initState = {
  teams: [],
  languages: [],
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
  },
  initState,
)
export default reducer
