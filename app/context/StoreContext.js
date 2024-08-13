'use client';

import { auth, linksCollection } from "@/utilities/firebase/firebaseConfig";
import { message } from "antd";
import { doc, addDoc, getDoc, onSnapshot, setDoc, updateDoc, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [allLinks, setAllLinks] = useState(null);
  const [linkData, setLinkData] = useState(null);

  const fetchData = (collectionRef, collectionName) => {
    onSnapshot(collectionRef, async (snapshot) => {
      const linksData = snapshot.docs.map(doc => doc.data())
      const userLinks = linksData.find(link => link.userId === auth.currentUser.uid)
      switch (collectionName) {
        case 'links':          
        console.log('links fetched successfully', linksData)
          setAllLinks(linksData)
          if (userLinks) {
            console.log(userLinks)
            setLinkData(userLinks)
          }
          break;
      
        default:
          break;
      }
    })
  }

  const updateLinksData = (linksArray) => {
    const linksDocRef = doc(linksCollection, auth?.currentUser?.uid)
    console.log('update links data called with prop = ', linksArray)
    if (linkData) {
      console.log('theres some existing link data', linkData, '\nIn addition to new data', linksArray)
      const newData = linkData
      newData.links.push(...linksArray)
      console.log('new data to be updated', newData)
      updateDoc(linksDocRef, {
        userId: auth.currentUser.uid,
        links: newData.links
      }).then(() => {
        message.success('Links updated successfully!')
      }).catch(error => {
        message.error('Error updating links!')
      })
    } else {
      setLinkData(linksArray)
      setDoc(linksDocRef, {
        userId: auth.currentUser.uid,
        links: linksArray
      })
    }
    console.log('current linkData', linkData)
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
    fetchData(linksCollection, 'links')
  }, [])

  return (
    <StoreContext.Provider value={{ linkData, allLinks, setLinkData, updateLinksData, postLinksUpdate }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext);
}