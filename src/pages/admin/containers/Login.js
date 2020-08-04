import React from 'react'
import LoginComponent from '../components/Login'
import { loginRequest } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (form) => {
    dispatch(loginRequest(form))
      .then((res) => {
        console.log('success')
      })
      .catch((err) => console.log('err', err))
  }

  return <LoginComponent handleSubmit={handleSubmit} />
}

export default Login
