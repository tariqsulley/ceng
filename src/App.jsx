import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/Login';
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
