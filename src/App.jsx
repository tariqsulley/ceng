import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from "./pages/Home"
import { AuthContextProvider } from "./contexts/AuthContext";


function App() {
  return (
  <AuthContextProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Home" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </AuthContextProvider>
  )
}

export default App
