import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from "./pages/Home"
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthContextProvider } from "./contexts/AuthContext";
import { TopicProvider } from "./contexts/TopicContext";

function App() {
  return (
  <AuthContextProvider>
  <TopicProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Home" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </TopicProvider>
   </AuthContextProvider>
  )
}

export default App
