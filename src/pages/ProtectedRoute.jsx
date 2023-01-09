import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'
import Home from "./Home"

const ProtectedRoute = ({children})=> {
  const {user} = UserAuth()
  if(user === undefined){
    return <Navigate to="/"/>
  }
  else{ 
    return children
  }
}

export default ProtectedRoute