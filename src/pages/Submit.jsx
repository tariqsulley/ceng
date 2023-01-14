import React from "react";
import "../styles/SubmitStyles.css"
import Card from "../components/Card";
import { UserAuth } from "../contexts/AuthContext";

const SubmitPage = ()=>{
    const {user} = UserAuth()
    return(
    <div className="Submit-Page">
        <div className="Submit-Top">
            <div className="Submit-Top-Left">
                <p className="Topic-Bold"> Topic Submission</p>
                <p style={{color:"black"}}> {user && user.email }</p>
            </div>
            <div className="Submit-Top-Right">
              <p style={{color:"black"}}>  {Date().slice(0,15)} </p>
            </div>
        </div>

        <div className="Submit-Bottom">
            <Card/>
        </div>
    </div>
    )
}

export default SubmitPage