import React, {useState} from "react";
import "../styles/SubmitStyles.css"
import Card from "../components/Card";
import SubmitInput from "../components/SubmitInput";
import { UserAuth } from "../contexts/AuthContext";

const SubmitPage = ()=>{
    const {user} = UserAuth()
    const [status,setStatus] = useState(1)
    return(
    <div className="Submit-Page">
        <div className="Submit-Top">
            <div className="Submit-Top-Left">
                <p className="Topic-Bold"> Topic Submission</p>
                <p style={{color:"black"}}> {user && user.email }</p>
            </div>
        </div>

        <div className="Submit-Bottom">
        {status === 0 ? <Card />:<SubmitInput/>}
        </div>
    </div>
    )
}


{/* 
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
            <Card />
        </div>
    */}

export default SubmitPage