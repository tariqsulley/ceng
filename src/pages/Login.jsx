import React, {useEffect,useState} from "react"
import "../styles/LoginStyles.css"
import LeftDisplay from "../components/LeftDisplay"

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login =()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passError,setPassError] = useState("")
    const [emailError,setEmailError] = useState(null)

    const validateEmail = (email) =>{
        if(emailRegex.test(email)){
                setEmailError(false)
        }
        else{
            setEmailError(true)
        }
    }
    
    useEffect(()=>{
        setPassError("")
    },[])

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
                    <input value={email} onChange={(e)=> 
                    {setEmail(e.target.value);validateEmail(e.target.value)}} 
                    className={(emailError == null ? "Email-Input":(emailError == true ? "Email-Input-Bad":"Email-Input-Valid") )
                     } 
                    type="text"/>
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
                    <input value={password} onChange={(e)=> {setPassword(e.target.value);
                    setPassError("Password cannot be empty")}}
                     className="Password-Input" type="password"/>
                     <p className="empty">{password.length > 0 ? "":passError}</p>
                </div>
                <button className="Btn"> Sign In </button>
               </form>
            </div>
        </div>
    )
}

export default Login