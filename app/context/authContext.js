'use client';

import { auth } from "@/utilities/firebase/firebaseConfig";
import { message } from "antd";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
    
  return (
    <AuthContext.Provider value={{user, signupUser, signinUser}}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => { 
  return useContext(AuthContext);
}
