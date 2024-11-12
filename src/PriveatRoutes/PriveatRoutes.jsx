import React, { useContext } from 'react'
import { AuthContext } from '../Components/Provider/AuthProvider'
import { Navigate } from 'react-router-dom'

function PriveatRoutes({children}) {
    const {user,loding}= useContext(AuthContext)
    if(loding){
        return <span className="loading loading-spinner loading-xs"></span>;
    }
    if(user){
        return children
    }
  return (
    <Navigate to={'/login'}/>
  )
}

export default PriveatRoutes