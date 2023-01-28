import React, {useEffect} from "react";
import { useState } from "react";
import "../styles/CardStyles.css"
import { UserAuth } from "../contexts/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';


const Card = ()=>
    const {user} = UserAuth()
    const [stud_name,setname] = useState("")
    const[status,setStatus] = useState("...")
    const[last_name,setLast] = useState("")
    const [indexNum,setIndexNumber] = useState("")
    const[topic,setTopic] = useState("")

    //Bug: Firebase converts an email into lowercase, I am also storing the email in mongodb
    // so an email starting with a capital letter will not work
        useEffect(()=>{
        fetch(`https://ceng.onrender.com/api/student/${user.email}`,{ 
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .then(data =>{
            setname(new Array(data[0]).map(i => [i.FirstName]))
            setIndexNumber(new Array(data[0]).map(i => [JSON.parse(i.IndexNumber)]))
            setLast(new Array(data[0]).map(i => [i.LastName]))
            setTopic(new Array(data[0]).map(i => [i.Topic]))
            setStatus(new Array(data[0]).map(i => [i.Status]))
        })
        .catch(err => console.log(err))
    })

    if(status !== "..."){
    return(
        <div className={status[0][0] === "Pending" ?"Card-Body-Pending":status[0][0]==="Accepted" ? 
        "Card-Body-Accepted":status[0][0] === "Rejected" ? "Card-Body-Rejected":"Card-Body-Pending"}>
            <div className="Card-Top">
                <div className="Name-Field">
                    <p className="Card-Name"> {stud_name +` ${last_name}`}</p>
                    <p className="Card-Index"> {indexNum} </p>
                </div>
                <div className={status[0][0] === "Pending"?"State-Pending":status[0][0]==="Accepted" ? 
        "State-Accepted":status[0][0] === "Rejected" ? "State-Rejected":"State-Pending"}>
                   {status}
                </div>
            </div>
            <div className="Card-Bottom">
                <p className="Card-Title"> Topic Submitted</p>
                <p className="Card-Topic">{topic}</p>
            </div>
        </div>
    )
    }else{
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <CircularProgress style={{color:"orange"}}/>
            </div>
        )
    }
}

export default Card
