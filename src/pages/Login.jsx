import React from "react"
import "../styles/LoginStyles.css"
import svg from "../assets/engineers.svg"

const Login =()=>{
    return(
        <div className="MainPage">
            <div className ="RightSide">
                <div className="bar">
                
                </div>
                <div className="Welcome-Txt">
                    Welcome To The CENG Portal
                </div>
                <div className="Submit-Txt">
                    Submit your ceng topics for approval and reports for
                    Grading by Lecturers
                </div>
                <div>
                    <img className="Svg" src={svg}/>
                </div>
            </div>
            <div className="LeftSide">
                input
            </div>
        </div>
    )
}

export default Login