import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { StyleProvider } from './contexts/StylesContext';
function App() {
  return (
  <StyleProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
   </StyleProvider>
  )
}

export default App
