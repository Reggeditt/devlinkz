'use client';

import { auth } from "@/utilities/firebase/firebaseConfig";
import { message } from "antd";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const signupUser = async (email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        router.push('/home');
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
        const user = userCredential.user;
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
  return (
    <AuthContext.Provider value={{user, signupUser, signinUser, signinUserWithGoogle}}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => { 
  return useContext(AuthContext);
}
