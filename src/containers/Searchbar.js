import React from 'react'
import SearchbarComponent from '../components/Searchbar'
import { useParams, useHistory } from 'react-router-dom'

const Searchbar = ({ isOpen, toggleSearch }) => {
  const { language } = useParams()
  const history = useHistory()
  const search = (searchText) => {
    toggleSearch(false)
    history.push(`/${language}/search/${encodeURI(searchText)}`)
  }
  const closeSearch = (e) => {
    toggleSearch(false)
  }

  return (
    <SearchbarComponent
      closeSearch={closeSearch}
      isOpen={isOpen}
      onSearch={search}
    />
  )
}

export default Searchbar
