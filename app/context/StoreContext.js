'use client';

import { auth, linksCollection } from "@/utilities/firebase/firebaseConfig";
import { addDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({children}) => {

  const [linkData, setLinkData] = useState(null);
    
  const addNewLinkTemplate = () => {
    const newLink = {
      id: linkData?.length || 1,
      platform: '',
      link: ''
    }
    setLinkData((prev) => prev? [...prev, newLink]: [newLink])
  }

  const updateLinksData = (linksArray) => {
    console.log('updating linksArray in store... ', linksArray)
    setLinkData(linksArray)
  }

  const postLinksUpdate = () => {
    addDoc(linksCollection, {
      userId: auth.currentUser.uid,
      links: linkData
    })
  } 
  return (
    <StoreContext.Provider value={{linkData, setLinkData, addNewLinkTemplate, updateLinksData, postLinksUpdate}}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext);
}