import React, { useState } from "react";
import LeftDisplay from "../components/LeftDisplay";
import "../styles/SignUpStyles.css"
import { Link } from "react-router-dom";
import { validateEmail } from "./Login";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckIcon from '@mui/icons-material/Check';

const Signup = ()=>{
    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const [PasswordCon,setPasswordCon] = useState("")
    const [StudentID,setStudentID] = useState("")
    const [IndexNumber,setIndexNumber] = useState("")

    const [emailError,setEmailError] = useState(null)

    const handleStudentIDChange = (e) => {
        const inputValue = e.target.value;
        const eightDigitRegex = /^\d{0,8}$/;
      
        if (eightDigitRegex.test(inputValue)) {
          setStudentID(inputValue);
        }
      }

      
    const handleIndexNumberChange = (e) => {
        const inputValue = e.target.value;
        const numberRegex = /^[0-9]*$/;
  
       if (numberRegex.test(inputValue)) {
          setIndexNumber(inputValue);
        }
  }

    return(
        <div className="Main-Page">
            <div>
            <LeftDisplay prop={true}/>   
            </div>
            
            <div className="SignUpPage">
            <div className="Bar">
            </div>
            <div className="First-Section">
                <p className="P1"> Create An Account</p>
                <p className="P2"> Do you already have an account?</p>
                <Link to="/"> 
                <button className="B1"> Sign in here </button>
                </Link>
            </div>
            <div className="Second-Section">
                <div className="Name-Section">
                
                <div className="First-Name">
                <p style={{color:"black"}}> First Name</p>
                <input value={FirstName} onChange={(e)=>setFirstName(e.target.value)} 
                className="Input" type="text"/>
                </div>

                <div className="Last-Name">
                <p style={{color:"black"}}> Last Name </p>
                <input value={LastName} onChange={(e)=>setLastName(e.target.value)} 
                 className="Input" type="text"/>
                </div>
                
                </div>

                <div className="Contact-Section">
                <p style={{color:"black"}}> Email Address </p>
                <div className="Email-Wrapper">
                     <div> {emailError == null? "":(emailError == true ?
                     <ErrorOutlineIcon className="Icon" style={{fontSize:30,color:"tomato"}}/>:
                     <CheckIcon className="Icon" style={{fontSize:30,color:"green"}}/>)} 
                     </div>
                    <input value={Email} onChange={(e)=> 
                    {setEmail(e.target.value);validateEmail(e.target.value,setEmailError)}} 
                    className={(emailError == null ? "Email-Input":(emailError == true ? 
                    "Email-Input-Bad":"Email-Input-Valid") )} 
                    type="text"/>
                </div>
                
                <p style={{color:"black"}}> Student ID </p>
                <input value={StudentID} onChange={handleStudentIDChange} 
                className="Input" type="text"/>
                
                <p style={{color:"black"}}> Index Number </p>
                <input value={IndexNumber} onChange={handleIndexNumberChange} 
                className="Input" type="text"/>
                
                <p style={{color:"black"}}> Password </p>
                <input value={Password} onChange={(e)=> setPassword(e.target.value)}
                className="Input" type="text"/>
                
                <p style={{color:"black"}}> Confirm Password </p>
                <input value={PasswordCon} onChange={(e)=> setPasswordCon(e.target.value)}
                className="Input" type="text"/>
                
                <button className="Btn"> Submit </button>
                </div>
            </div>

            </div>      
        </div>
    )
}

export default Signup