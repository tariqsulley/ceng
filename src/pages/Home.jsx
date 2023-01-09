import React, { useEffect,useState } from "react";
import "../styles/HomeStyles.css"
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import SubmitPage from "./Submit";

const Home = ()=>{
    const[page,setPage] = useState()
    const {user,logOut} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async()=>{
        try{
            await logOut()
            navigate("/")
        }catch(e){
            console.log(e.message)
        }
    }

    
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    useEffect(()=>{
        setPage(2)
    },[])
    return(
        <div className="HomePage">
            <div className="Bar">
            </div>
            
            <div className={isMenuVisible ===true?"Menu":"Menu-Mobile"}>
               <div className="Top-Field">
               <div className="Title-Field">
               <div className="Ceng-Field">
               <p className="Coe-Txt">CoE Ceng Portal</p>
               </div>
               <div className="Home-Field">
                <p onClick={()=>setPage(1)} className="Student-Txt">Student Home</p>
               </div>
               </div>

               <div className="Tools-Field">
                    <div className="Tool-Txt">
                        Tools
                    </div>
                    <div className="Submit-Field">
                        <p onClick={()=>setPage(2)} className="Student-Txt">Submit Your Topic</p>
                    </div>
                    <div className="Upload-Field">
                        <p onClick={()=>setPage(3)} className="Student-Txt">Upload Your Report</p>
                    </div>
               </div>
               </div>

               <div className="Bottom-Field">
               <button className="Log-Btn" onClick={handleLogout}>
                Log Out
                </button>
               </div>
            </div>
            <div className="Content">
            <div onClick={toggleMenu} className="Toggle">
            <div className="Bar1"></div>
            <div className="Bar2"></div>
            <div className="Bar3"></div>
            </div>
             {page === 1 ? <p>1</p>:page === 2 ? <SubmitPage/>:3 }
            </div>
        </div>
    )
}

export default Home