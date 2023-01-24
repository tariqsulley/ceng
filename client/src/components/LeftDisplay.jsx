import React, { useEffect } from "react"
import "../styles/LoginStyles.css"
import "../styles/SignUpStyles.css"
import svg from "../assets/engineers.svg"

const LeftDisplay = ({prop=false})=>{
    const onSignUp = prop

    useEffect(()=>{
        console.log(onSignUp
    },[])

    return(
        <div className ={onSignUp == true ? "FixedSide":"LeftSide"}>
        
        <div className="Welcome-Txt">
            Welcome To The CENG Portal
        </div>
        <div className="Submit-Txt">
            Submit your CENG topics for approval and reports for
            Grading by Lecturers
        </div>
        <div>
            <img className="Svg" alt="engineers svg" src={svg}/>
        </div>
    </div>
    )
}

export default LeftDisplay
