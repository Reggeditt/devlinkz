'use client';

import { auth, linksCollection } from "@/utilities/firebase/firebaseConfig";
import { message } from "antd";
import { addDoc, getDoc, onSnapshot, updateDoc, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [allLinks, setAllLinks] = useState(null);
  const [currentUserLinks, setCurrentUserLinks] = useState(null);

  const [linkData, setLinkData] = useState(null);

  const addNewLinkTemplate = () => {
    const newLink = {
      id: linkData?.length || 1,
      platform: '',
      link: ''
    }
    setLinkData((prev) => prev ? [...prev, newLink] : [newLink])
  }

  const updateLinksData = (linksArray) => {
    console.log('updating linksArray in store... ', linksArray)
    setLinkData(linksArray)
  }

  const postLinksUpdate = () => {
    try {
      addDoc(linksCollection, {
        userId: auth.currentUser.uid,
        links: linkData
      })
      message.success('Links saved successfully!')
    } catch (error) {
      message.error('Error saving links!')
    }
  }

  useEffect(() => {
    onSnapshot(linksCollection, async (snapshot) => {
      const linksData = snapshot.docs.map(doc => doc.data())
      const userLinks = linksData.filter(link => link.userId === auth.currentUser.uid)
      setAllLinks(linksData)
      if (userLinks.length > 0) {
        setLinkData(userLinks[0].links)
        setCurrentUserLinks({ id: userLinks[0].id, links: userLinks[0].links })
      }
    })

    console.log('currentUserLinks: ', currentUserLinks)
    console.log('linkData: ', linkData)
  }, [])

  return (
    <StoreContext.Provider value={{ linkData, setLinkData, addNewLinkTemplate, updateLinksData, postLinksUpdate }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext);
}