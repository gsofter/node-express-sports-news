import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LanguageComponent from '../components/Language'
import * as api from '../../../api'
import { loadLanguages } from '../../../redux/actions'
const Language = () => {
  const langs = useSelector((state) => state.languages)
  const dispatch = useDispatch()
  const addNewLanguage = (newData, resolve, reject) => {
    const func = async () => {
      try {
        await api.addNewLanguage(newData)
        dispatch(loadLanguages())
        resolve()
      } catch (error) {
        reject(error)
      }
    }
    func()
  }

  const updateLanguage = (langId, newData, resolve, reject) => {
    const func = async () => {
      try {
        await api.updateLanguage(langId, newData)
        dispatch(loadLanguages())
        resolve()
      } catch (error) {
        reject(error)
      }
    }
    func()
  }

  const removeLanguage = (langId, resolve, reject) => {
    const func = async () => {
      try {
        await api.removeLanguage(langId)
        dispatch(loadLanguages())
        resolve()
      } catch (error) {
        reject(error)
      }
    }
    func()
  }

  return (
    <LanguageComponent
      languages={langs}
      addNewLanguage={addNewLanguage}
      updateLanguage={updateLanguage}
      removeLanguage={removeLanguage}
    />
  )
}

export default Language
