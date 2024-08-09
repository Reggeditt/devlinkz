'use client';

import { auth, usersCollection } from "@/utilities/firebase/firebaseConfig";
import { message } from "antd";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export function AuthProvider({children}) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const signupUser = async (email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        router.push('/home');
        addDoc(usersCollection, user);
        setUser(user);
        message.success('User account created successfully');
      });
    } catch (error) {
      message.error(error);
    }
  };

  const signinUser = async (email, password) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        addDoc(usersCollection, userCredential.user);
        router.push('/home');
        setUser(user);
        message.success('User signed in successfully');
      }).catch((error) => {
        message.error(error.message);
      });
    } catch (error) {
      message.error(error);
    }
  };
    
  const signinUserWithGoogle = () => {
    console.log('signing up with google');
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUser(user);
      router.push('/home');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  };

  const signupUserWithGoogle = () => {
    console.log('signing up with google');
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      router.push('/home');
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUser(user);
    }).then(() => {
      addDoc(usersCollection, user).then(() => {
        message.success('User account added to DB successfully');
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  };

  const logoutUser = () => {
    auth.signOut().then(() => {
      message.success('User signed out successfully');
      setUser(null);
      router.push('/login');
    }).catch((error) => {
      message.error(error);
    });
  };
  return (
    <AuthContext.Provider value={{user, signupUser, signinUser, signinUserWithGoogle, signupUserWithGoogle, logoutUser}}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth() { 
  return useContext(AuthContext);
}
