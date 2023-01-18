import React, {useState,useEffect} from "react";
import "../styles/SubmitStyles.css"
import Card from "../components/Card";
import SubmitInput from "../components/SubmitInput";
import { UserAuth } from "../contexts/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';


const SubmitPage = ()=>{
    const {user} = UserAuth()
    const [status,setStatus] = useState("...")
    const [value,setValue] = useState("Pending")
    useEffect( ()=>{
         fetch(`https://ceng.onrender.com/api/student/${user.email}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
        .then(data => {
            data[0].hasOwnProperty("Topic") === true ? setStatus(0):setStatus(1)
            setValue(new Array(data[0]).map(i => [i.Status]))
        })
        console.log(value[0][0])
    },[])

    const Change =()=>{
        setStatus(0)
    }

    if( status !== "..." && value[0][0]  !== "Rejected"){
    return(
    <div className="Submit-Page">
        <div className="Submit-Top">
            <div className="Submit-Top-Left">
                <p className="Topic-Bold">Submit Topic </p>
                <p style={{color:"black"}}> {user && user.email }</p>
            </div>
        </div>

        <div className="Submit-Bottom">
    
        {status === 0 ? <Card/> : status === 1 ? <SubmitInput Change={Change} /> : null}
        </div>
    </div>
    )
    }
    else if( value[0][0] !== undefined && value[0][0] === "Rejected"){
     return(
        <div className="Submit-Page">
        <p style={{color:"black",fontWeight:"bold"}}> Topic Rejected, submit a better one!</p>
        <SubmitInput Change={Change}/>
        <Card/>
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