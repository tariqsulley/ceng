import React, {useState,useEffect} from "react";
import "../styles/SubmitStyles.css"
import Card from "../components/Card";
import SubmitInput from "../components/SubmitInput";
import { UserAuth } from "../contexts/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';


const SubmitPage = ()=>{
    const {user} = UserAuth()
    const [status,setStatus] = useState("...")

    useEffect( ()=>{
         fetch(`https://ceng.onrender.com/api/student/${user.email}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
        .then(data => {
            data[0].hasOwnProperty("Topic") === true ? setStatus(0):setStatus(1)
        })
    },[])

    const Change =()=>{
        setStatus(0)
    }

    if(status !== "..."){
    return(
    <div className="Submit-Page">
        <div className="Submit-Top">
            <div className="Submit-Top-Left">
                <p className="Topic-Bold"> Topic Submission</p>
                <p style={{color:"black"}}> {user && user.email }</p>
            </div>
        </div>

        <div className="Submit-Bottom">
    
        {status === 0 ? <Card/> : status === 1 ? <SubmitInput Change={Change} /> : null}
        </div>
    </div>
    )
    }
    else{
        return(
            <div style={{height: "90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                 <CircularProgress style={{color:"orange"}}/>
            </div>
        )
    }

}

export default SubmitPage