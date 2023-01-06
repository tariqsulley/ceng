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
                    Submit your CENG topics for approval and reports for
                    Grading by Lecturers
                </div>
                <div>
                    <img className="Svg" src={svg}/>
                </div>
            </div>
            <div className="LeftSide">
               <div className="Sign-Txt">
                Sign In To The CENG Portal
               </div>
               <div className="New-Txt">
                New Here? 
                <div className="Create-Txt">
                    Create an Account
                </div>
               </div>
               <form className="form">
                <div className="Email-Field">
                    <p> Email Address</p>
                    <input className="Email-Input" type="text"/>
                </div>
                <div className="Password-Field">
                    <div className="Password-Top">
                        <div>
                            Password
                        </div>
                        <div>
                            Forgot Password
                        </div>
                    </div>
                    <input type="password"/>
                </div>
                <button className="btn"> Sign In </button>
               </form>
            </div>
        </div>
    )
}

export default Login