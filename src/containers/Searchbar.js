import React from 'react'
import SearchbarComponent from '../components/Searchbar'
const Searchbar = ({ isOpen, toggleSearch }) => {
  const closeSearch = (e) => {
    toggleSearch(false)
  }
  return <SearchbarComponent closeSearch={closeSearch} isOpen={isOpen} />
}

export default Searchbar
