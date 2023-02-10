// src/components/context/SearchSettingContext.js
import { useState, useContext, createContext } from 'react';

// set up context
export const SearchSettingContext = createContext();
export const useSearchSetting = () => useContext(SearchSettingContext);

// create provider for checkout page
export default function SearchSettingProvider({ children }) {
  // state for context
  const [searchWindowSetting, setSearchWindowSetting] = useState("new-window");

  // Search Setting Provider
  return (
    <>
      <SearchSettingContext.Provider
        value={{
          searchWindowSetting, setSearchWindowSetting
        }}
      >
        {children}
      </SearchSettingContext.Provider>
    </>
  )
}
