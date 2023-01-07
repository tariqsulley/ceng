import React from "react"
import "../styles/LoginStyles.css"
import svg from "../assets/engineers.svg"

const LeftDisplay = ()=>{
    return(
        <div className ="LeftSide">
        <div className="bar">
        </div>
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