'use client';

import { auth, linksCollection } from "@/utilities/firebase/firebaseConfig";
import { message } from "antd";
import { doc, addDoc, getDoc, onSnapshot, setDoc, updateDoc, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [allLinks, setAllLinks] = useState(null);
  const [linkData, setLinkData] = useState(null);
  const [linksDocRef, setLinksDocRef] = useState(null)

  const fetchData = (collectionRef, collectionName) => {
    onSnapshot(collectionRef, async (snapshot) => {
      const linksData = snapshot.docs.map(doc => doc.data())
      const userLinks = linksData.find(link => link.userId === auth.currentUser.uid)
      switch (collectionName) {
        case 'links':
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
    console.log('update links data called with prop = ', linksArray)
    if (linkData) {
      const newData = linkData
      newData.links.push(...linksArray)
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
  }

  const removeLinkData = (newArray) => {
    updateDoc(linksDocRef, {
      userId: auth.currentUser.uid,
      links: newArray
    }).then(() => {
      message.success('Link removed successfully!')
    }).catch(error => {
      message.error('Error removing link')
    })
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
    if (auth.currentUser) {
      setLinksDocRef(doc(linksCollection, auth?.currentUser?.uid))
      fetchData(linksCollection, 'links')
    }
  }, [auth.currentUser])

  return (
    <StoreContext.Provider value={{ linkData, allLinks, setLinkData, updateLinksData, removeLinkData, postLinksUpdate }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext);
}
