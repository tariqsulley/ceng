import React, {useEffect,useState} from "react"
import "../styles/LoginStyles.css"
import LeftDisplay from "../components/LeftDisplay"


const Login =()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(()=>{
        
    })
    return(
        <div className="MainPage">
            <LeftDisplay/>
                <div className="RightSide">
               <div className="Sign-Txt">
                Sign In To The CENG Portal
               </div>
               <div className="New-Txt">
                New Here? 
                <div className="Create-Txt">
                    Create an Account
                </div>
               </div>
               <form label="login-form" className="form">
                <div className="Email-Field">
                     <div className="Email-Txt">Email Address</div>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} 
                    className="Email-Input" type="text"/>
                </div>
                <div className="Password-Field">
                    <div className="Password-Top">
                        <div>
                            <div className="Password-Txt">Password</div>
                        </div>
                        <div>
                            <div className="Forgot-Txt">Forgot Password?</div>
                        </div>
                    </div>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)}
                     className="Password-Input" type="password"/>
                     <p className="empty">{password.length > 0 ? "":"Password cannot be empty"}</p>
                </div>
                <button className="Btn"> Sign In </button>
               </form>
            </div>
        </div>
    )
}

export default Login