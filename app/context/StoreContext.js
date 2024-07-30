'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({children}) => {

  const [linkData, setLinkData] = useState(null);
    
  const addNewLinkTemplate = () => {
    console.log('Adding new link template')
    const newLink = {
      id: linkData?.length + 1 || 1,
      platform: '',
      link: ''
    }
    setLinkData((prev) => prev? [...prev, newLink]: [newLink])
  }


  useEffect(() => {
    console.log('Link data from StoreProvider', linkData)
  }, [linkData])
  return (
    <StoreContext.Provider value={{linkData, setLinkData, addNewLinkTemplate}}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext);
}