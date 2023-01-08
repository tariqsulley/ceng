import React from "react";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

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
    return(
        <div>
            Hello, {user && user.email}
            <button onClick={handleLogout}>
                Log Out
            </button>
        </div>
    )
}

export default Home