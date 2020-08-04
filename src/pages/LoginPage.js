import React, { useState } from 'react'
import LoginComponent from './admin/components/Login'
import { useDispatch } from 'react-redux'
import { loginRequest } from '../redux/actions'
import { useHistory, useLocation } from 'react-router-dom'
const Login = () => {
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: '/admin' } }
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const handleSubmit = (form) => {
    dispatch(loginRequest(form))
      .then((res) => {
        history.push(from)
        console.log('success')
      })
      .catch((err) => {
        console.log('err', err)
        setError(true)
      })
  }
  return <LoginComponent handleSubmit={handleSubmit} error={error} />
}

export default Login
