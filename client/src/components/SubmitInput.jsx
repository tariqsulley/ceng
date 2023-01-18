import React, {useEffect, useState} from "react"
import "../styles/SubmitInputStyles.css"
import TextField from '@mui/material/TextField';
import { UserAuth } from "../contexts/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

const SubmitInput = ({Change})=>{
    const {user} = UserAuth()
    const [topic,setTopic] = useState("")
    const [clicked,setClicked] = useState(false)

   
    const submitTopic = async()=>{
       await fetch(`https://ceng.onrender.com/api/student/topic/${user.email}`,{
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
       setClicked(!clicked)
    }

    return(
        <div className="SubmitInputPage">
            <TextField id="outlined-basic" value ={topic} onChange={(e)=> setTopic(e.target.value)}
             label="Submit Topic" variant="outlined" />
        <button className="SubmitInputBtn" onClick={()=>{submitTopic();Change();}}>
           {clicked === true ? <CircularProgress style={{color:"lightgrey"}}/>:"Submit"}
        </button>
        </div>
    )
}


export default SubmitInput