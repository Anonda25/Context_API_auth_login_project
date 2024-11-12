import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase-init";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const usersignOut = ()=>{
    return signOut(auth)
  }

  useEffect(() => {
     const unSubcribe = onAuthStateChanged(auth, currentUser=>{
        console.log('currentUsaer loged in', currentUser)
        setUser(currentUser)
    })

    return ()=>{
        unSubcribe();
    }


  }, []);

  const authInfo = {
    user,
    userRegister,
    userLogin,
    usersignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
