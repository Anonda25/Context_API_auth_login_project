import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate } from 'react-router-dom';

function Profile({children}) {
    const {user, loding}= useContext(AuthContext)


    if(loding){
        return <span className="loading loading-spinner loading-xs"></span>;
    }

    if(user){
        return children;
    }

  return (
    <Navigate to={'/login'}></Navigate>
  )
}

export default Profile