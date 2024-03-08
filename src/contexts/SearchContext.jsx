import React, { createContext, useContext, useState } from 'react';

const SearchQueryContext = createContext()

export const useSearchQuery = () => {
  return useContext(SearchQueryContext)
}

export const SearchQueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  )
}