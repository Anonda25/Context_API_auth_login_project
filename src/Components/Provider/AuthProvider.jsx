import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase-init";

export const AuthContext = createContext(null);

const goolgeProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
    const [loding, setLoding]= useState(true)


  
  const userRegister = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
      setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleAuthProvider =()=>{
    return signInWithPopup(auth, goolgeProvider)
  }


  const usersignOut = ()=>{
      setLoding(true);
    return signOut(auth)
  }

  useEffect(() => {
     const unSubcribe = onAuthStateChanged(auth, currentUser=>{
        console.log('currentUsaer loged in', currentUser)
        setUser(currentUser)
          setLoding(false);
    })

    return ()=>{
        unSubcribe();
    }


  }, []);

  const authInfo = {
    user,
    loding,
    userRegister,
    userLogin,
    usersignOut,
    googleAuthProvider,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
