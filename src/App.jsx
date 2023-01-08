import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContextProvider } from "./contexts/AuthContext";


function App() {
  return (
  <AuthContextProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
   </AuthContextProvider>
  )
}

export default App
