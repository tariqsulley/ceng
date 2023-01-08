import React, {useEffect,useState} from "react"
import "../styles/LoginStyles.css"
import LeftDisplay from "../components/LeftDisplay"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\S$/;

export const validateEmail = (email,action) =>{
    if(emailRegex.test(email)){
            action(false)
    }
    else{
        action(true)
    }
}

const Login =()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passError,setPassError] = useState("")
    const [emailError,setEmailError] = useState(null)
    const {signIn} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        try{
            e.preventDefault()
            await signIn(email,password)
            navigate("/Home")
        }catch(e){
            console.log(e.message)
        }
    }

    useEffect(()=>{
        setPassError("")
    },[])

    return(
        <div className="MainPage">
            <div className="bar">
        </div>
            <LeftDisplay/>
                <div className="RightSide">
                   <div className="Sign-Txt">
                    Sign In To The CENG Portal
               </div>
               <div className="New-Txt">
                New Here? 
                <div>
                  <Link className="Create-Txt" to="/Signup">  Create an Account </Link>
                </div>
               </div>
               <form label="login-form" onClick={handleSubmit}  className="form">
                <div className="Email-Field">
                     <div className="Email-Txt">Email Address </div>
                     <div className="Email-Wrapper">
                     <div> {emailError == null? "":(emailError == true ?
                     <ErrorOutlineIcon className="Icon" style={{fontSize:30,color:"tomato"}}/>:
                     <CheckIcon className="Icon" style={{fontSize:30,color:"green"}}/>)} 
                     </div>
                    <input value={email} onChange={(e)=> 
                    {setEmail(e.target.value);validateEmail(e.target.value,setEmailError)}} 
                    className={(emailError == null ? "Email-Input":(emailError == true ? 
                    "Email-Input-Bad":"Email-Input-Valid") )} 
                    type="text"/>
                    </div>
                </div>
                <div className="Password-Field">
                    <div className="Password-Top">
                        <div>
                            <div className="Password-Txt">Password</div>
                        </div>
                        <div>
                            <div className="Create-Txt" >Forgot Password?</div>
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