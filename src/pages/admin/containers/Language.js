import React from 'react'
import { useSelector } from 'react-redux'
import LanguageComponent from '../components/Language'
const Language = () => {
  const langs = useSelector((state) => state.languages)
  console.log('languages', langs)
  return <LanguageComponent languages={langs} />
  //   console.log('langs', langs)
  //   return <h1> asdf </h1>
}

export default Language
