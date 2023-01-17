import React, {useEffect, useState} from "react"
import "../styles/SubmitInputStyles.css"
import TextField from '@mui/material/TextField';
import { UserAuth } from "../contexts/AuthContext";

const SubmitInput = ({Change})=>{
    const {user} = UserAuth()
    const [topic,setTopic] = useState("")

    useEffect(()=>{
        fetch("https")
    })
    const submitTopic = async()=>{
       await fetch(`http://localhost:5000/api/student/topic/${user.email}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Topic:topic,
                Status: "Pending"
            })
       })
       .then(res => res.json())
        .then(data => console.log(data))
       .catch(err => console.log(err))
    }

    return(
        <div className="SubmitInputPage">
            <TextField id="outlined-basic" value ={topic} onChange={(e)=> setTopic(e.target.value)}
             label="Submit Topic" variant="outlined" />
        <button className="SubmitInputBtn" onClick={()=>{submitTopic();Change();}}>
            Submit
        </button>
        </div>
    )
}


export default SubmitInput