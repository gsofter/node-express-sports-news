import { createAction } from 'redux-actions'
import * as api from '../api'
export const INIT_TEAMS = 'INIT_TEAMS'
export const INIT_LANGUAGES = 'INIT_LANGUAGES'
export const INIT_BANNERS = 'INIT_BANNERS'
export const SET_MY_LANGUAGE = 'SET_MY_LANGUAGE'
export const SET_MY_TEAM = 'SET_MY_TEAM'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const initTeams = createAction(INIT_TEAMS)
export const initLanguages = createAction(INIT_LANGUAGES)
export const initBanners = createAction(INIT_BANNERS)
export const setMyLanguage = createAction(SET_MY_LANGUAGE)
export const setMyTeam = createAction(SET_MY_TEAM)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFailed = createAction(LOGIN_FAILED)
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

export const loadLanguages = () => async (dispatch) => {
  try {
    const res = await api.getLanguages()
    console.log('res getLanguages ====> ', res.data)
    dispatch(initLanguages(res.data))
  } catch (e) {
    console.log('Error ====> ', e.message)
    dispatch(initLanguages([]))
    throw e
  }
}

export const loadBanners = () => async (dispatch) => {
  try {
    const res = await api.getBanners
    console.log('loadBanners', res.data)
    dispatch(initBanners(res.data))
  } catch (e) {
    console.log('Error =====>', e.message)
    dispatch(initBanners([]))
  }
}

export const loginRequest = (form) => async (dispatch) => {
  try {
    const res = await api.login(form)
    console.log('admin_token', res.data)
    dispatch(loginSuccess(res.data))
  } catch (e) {
    dispatch(loginFailed())
    throw e
  }
}
