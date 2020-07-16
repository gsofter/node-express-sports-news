import React from 'react'
import SearchbarComponent from '../components/Searchbar'

const teams = [
  {
    country: 'England',
    language: 'EN',
    team_name: 'Liverpool',
  },
  {
    country: 'Italy',
    language: 'IT',
    team_name: 'AC milan',
  },
]
const Searchbar = ({ isOpen, toggleSearch }) => {
  const closeSearch = (e) => {
    toggleSearch(false)
  }
  return (
    <SearchbarComponent
      closeSearch={closeSearch}
      isOpen={isOpen}
      teams={teams}
    />
  )
}

export default Searchbar
