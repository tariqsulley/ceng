import React, {useEffect, useState} from "react"
import "../styles/SubmitInputStyles.css"
import TextField from '@mui/material/TextField';
import { UserAuth } from "../contexts/AuthContext";
import { UseTopic } from "../contexts/TopicContext";

const SubmitInput = ({Change,val})=>{
    const {user} = UserAuth()
    const {topic,WriteTopic} = UseTopic()
    const submitTopic = ()=>{
       fetch(`http://localhost:5000/api/student/${user.email}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                Topic:topic
            }
       }).then(res => res.json)
       .then(data => console.log(data))
    }
    return(
        <div className="SubmitInputPage">
            <TextField id="outlined-basic" value ={topic} onChange={(e)=> WriteTopic(e.target.value)}
             label="Submit Topic" variant="outlined" />
        <button className="SubmitInputBtn" onClick={Change}>
            Submit
        </button>
        </div>
    )
}


export default SubmitInput