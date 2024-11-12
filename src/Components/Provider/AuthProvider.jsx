import React, { createContext } from "react";

 export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const authInfo = {
    name: "ananda bisweas",
  };
  return (
  
  <AuthContext.Provider value={authInfo}>

  </AuthContext.Provider>
  
)};

export default AuthProvider;
