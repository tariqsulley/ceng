import React, {useEffect} from "react";
import { useState } from "react";
import "../styles/CardStyles.css"
import { UserAuth } from "../contexts/AuthContext";

const Card = ()=>{
    const {user} = UserAuth()
    const [stud_name,setname] = useState("")
    const[last_name,setLast] = useState("")
    const [indexNum,setIndexNumber] = useState("")
    useEffect(()=>{
        fetch(`http://localhost:5000/api/student/${user.email}`,{
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
        })
        .catch(err => console.log(err))
    },[])
    return(
        <div className="Card-Body">
            <div className="Card-Top">
                <div className="Name-Field">
                    <p className="Card-Name"> {stud_name +` ${last_name}`}</p>
                    <p className="Card-Index"> {indexNum} </p>
                </div>
                <div className="State-Green">
                    Accepted
                </div>
            </div>
            <div className="Card-Bottom">
                <p className="Card-Title"> Topic Submitted</p>
                <p className="Card-Topic"> Inadequate Street Lights In The Lashibi Community</p>
            </div>
        </div>
    )
}

export default Card