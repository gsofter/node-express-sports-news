import React from 'react'
import SearchbarComponent from '../components/Searchbar'
import { useParams, useHistory } from 'react-router-dom'

const Searchbar = ({ isOpen, toggleSearch }) => {
  const { language } = useParams()
  const history = useHistory()
  const search = (searchText) => {
    history.push(`/${language}/search/${encodeURI(searchText)}`)
    toggleSearch(false)
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
