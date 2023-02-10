// src/components/context/LandingContext.js
import { useState, useContext, createContext } from 'react';

// set up context
export const LandingContext = createContext();
export const useLanding = () => useContext(LandingContext);

// create provider for landing page
export default function LandingProvider({ children }) {
  // state for context
  const [showSettingModal, setShowSettingModal] = useState(false);

  // Landing Provider
  return (
    <>
      <LandingContext.Provider
        value={{
          showSettingModal, setShowSettingModal
        }}
      >
        {children}
      </LandingContext.Provider>
    </>
  )
}
