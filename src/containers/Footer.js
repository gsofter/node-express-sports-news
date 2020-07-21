import React from 'react'
import FooterComponent from '../components/Footer'
import { useHistory } from 'react-router-dom'
const Footer = () => {
  const history = useHistory()
  const onAboutUs = () => {
    history.push('/en/aboutus')
  }
  return <FooterComponent onClickAboutUs={onAboutUs} />
}

export default Footer
