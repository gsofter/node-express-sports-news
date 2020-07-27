import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LanguageComponent from '../components/Language'
import * as api from '../../../api'
import { loadLanguages } from '../../../redux/actions'
import { useSnackbar } from 'notistack'
const Language = () => {
  const langs = useSelector((state) => state.languages)
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const addNewLanguage = (newData, resolve, reject) => {
    const func = async () => {
      try {
        await api.addNewLanguage(newData)
        enqueueSnackbar('Successfully added', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        dispatch(loadLanguages())
        resolve()
      } catch (error) {
        enqueueSnackbar('Add error', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        reject(error)
      }
    }
    func()
  }

  const updateLanguage = (langId, newData, resolve, reject) => {
    const func = async () => {
      try {
        await api.updateLanguage(langId, newData)
        enqueueSnackbar('Successfully update', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        dispatch(loadLanguages())
        resolve()
      } catch (error) {
        enqueueSnackbar('Update Error', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        reject(error)
      }
    }
    func()
  }

  const removeLanguage = (langId, resolve, reject) => {
    const func = async () => {
      try {
        await api.removeLanguage(langId)
        enqueueSnackbar('Successfully removed', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        dispatch(loadLanguages())
        resolve()
      } catch (error) {
        enqueueSnackbar('Remove Error', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
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
