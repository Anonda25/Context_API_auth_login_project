import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber/Navber'

function Main() {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
    </div>
  )
}

export default Main