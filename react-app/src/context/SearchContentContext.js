// src/components/context/SearchContentContext.js
import { useState, useContext, createContext } from 'react';

// set up context
export const SearchContentContext = createContext();
export const useSearchContent = () => useContext(SearchContentContext);

// create provider for checkout page
export default function SearchContentProvider({ children }) {
  // state for context
  const [currentSearchProvider, setCurrentSearchProvider] = useState("google");
  const [searchQuery, setSearchQuery] = useState("");

  // Search Content Provider
  return (
    <>
      <SearchContentContext.Provider
        value={{
          currentSearchProvider, setCurrentSearchProvider,
          searchQuery, setSearchQuery
        }}
      >
        {children}
      </SearchContentContext.Provider>
    </>
  )
}
