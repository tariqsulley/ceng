import React, { useEffect } from "react";
import "../styles/HomeStyles.css"
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import SubmitPage from "./Submit";

const Home = ()=>{
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

    useEffect(()=>{
        
    },[])
    return(
        <div className="HomePage">
            <div className="Bar">
            </div>
            <div className="Menu">
               <div className="Top-Field">
               <div className="Title-Field">
               <div className="Ceng-Field">
               <p className="Coe-Txt">CoE Ceng Portal</p>
               </div>
               <div className="Home-Field">
                <p className="Student-Txt">Student Home</p>
               </div>
               </div>

               <div className="Tools-Field">
                    <div className="Tool-Txt">
                        Tools
                    </div>
                    <div className="Submit-Field">
                        <p className="Student-Txt">Submit Your Topic</p>
                    </div>
                    <div className="Upload-Field">
                        <p className="Student-Txt">Upload Your Report</p>
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
           
            <SubmitPage/>
            </div>
        </div>
    )
}

export default Home