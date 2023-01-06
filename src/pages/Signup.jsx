import React, { useEffect, useState } from "react";
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
    const [IdError,setIdError] = useState(null)

    const FirstNameValue = FirstName === "" ? "":FirstName.length > 0
    const LastNameValue = LastName === ""? "":LastName.length > 0

    useEffect(()=>{
        setFirstName("")
    },[])

    const checkPasswordStrength = password => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[\S]{8,}$/;
        if (regex.test(password)) {
          return "Strong";
        } else if (password.length >= 8 && (/[a-z]/.test(password) || /[A-Z]/.test(password))) {
          return "Moderate";
        } else {
          return "Weak";
        }
      }

    const handleStudentIDChange = (e) => {
        const inputValue = e.target.value;
        const eightDigitRegex = /^\d{0,8}$/;
      
        if (eightDigitRegex.test(inputValue)) {
          setStudentID(inputValue)
          setIdError(true)
        }else{
            setIdError(false)
        }
      }

      
    const handleIndexNumberChange = (e) => {
        const inputValue = e.target.value;
        const numberRegex = /^[0-9]*$/;
  
       if (numberRegex.test(inputValue)) {
          setIndexNumber(inputValue);
        }
  }

  const strength = Password.length === 0 ?  null:checkPasswordStrength(Password)
  
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
                <Link to="/"> ``
                <button className="B1"> Sign in here </button>
                </Link>
            </div>
            <div className="Second-Section">
                <div className="Name-Section">
                
                <div className="First-Name">
                <p style={{color:"black"}}> First Name</p>
               
                <div className="Email-Wrapper">
                     <div> {FirstNameValue === "" ? "":(FirstNameValue === true ? 
                     <CheckIcon className="Icon" style={{fontSize:30,color:"green"}}/>:
                     <ErrorOutlineIcon className="Icon-Bad" style={{fontSize:30,color:"tomato"}}/>)}
                    
                     </div>
                    <input value={FirstName} onChange={(e)=> 
                    setFirstName(e.target.value)} 
                    className={FirstNameValue === "" ? "Email-Input":FirstNameValue === true ?
                     "Email-Input-Valid":"Email-Input-Bad"} 
                    type="text"/>
                </div>
                </div>

                <div className="Last-Name">
                <p style={{color:"black"}}> Last Name </p>
                
                  <div className="Email-Wrapper">
                     <div> {LastNameValue === "" ? "":(LastNameValue === true ? 
                     <CheckIcon className="Icon" style={{fontSize:30,color:"green"}}/>:
                     <ErrorOutlineIcon className="Icon-Bad" style={{fontSize:30,color:"tomato"}}/>)}
                    
                     </div>
                    <input value={LastName} onChange={(e)=> 
                    setLastName(e.target.value)} 
                    className={LastNameValue === "" ? "Email-Input":LastNameValue === true ?
                     "Email-Input-Valid":"Email-Input-Bad"} 
                    type="text"/>
                </div>
                </div>
                
                </div>

                <div className="Contact-Section">
                <p style={{color:"black"}}> Email Address </p>
                <div className="Email-Wrapper">
                     <div> {emailError == null? "":(emailError == true ?
                     <ErrorOutlineIcon className="Icon-Bad" style={{fontSize:30,color:"tomato"}}/>:
                     <CheckIcon className="Icon" style={{fontSize:30,color:"green"}}/>)} 
                     </div>
                    <input value={Email} onChange={(e)=> 
                    {setEmail(e.target.value);validateEmail(e.target.value,setEmailError)}} 
                    className={(emailError == null ? "Email-Input":(emailError == true ? 
                    "Email-Input-Bad":"Email-Input-Valid") )} 
                    type="text"/>
                </div>
                
                <p style={{color:"black"}}> Student ID </p>
               
                <div className="Email-Wrapper">
                     <div> {IdError == null? "":(IdError== true ?
                     <ErrorOutlineIcon className="Icon-Bad" style={{fontSize:30,color:"tomato"}}/>:
                     <CheckIcon className="Icon" style={{fontSize:30,color:"green"}}/>)} 
                     </div>
                    <input value={StudentID} onChange={(e)=> 
                    {handleStudentIDChange(e)}} 
                    className={(IdError == null ? "Email-Input":(IdError == true ? 
                    "Email-Input-Bad":"Email-Input-Valid") )} 
                    type="text"/>
                </div>
                
                
                <p style={{color:"black"}}> Index Number </p>
                <input value={IndexNumber} onChange={handleIndexNumberChange} 
                className="Input" type="text"/>
                
                <p style={{color:"black"}}> Password </p>
                <input value={Password} onChange={(e)=> setPassword(e.target.value)}
                className="Input" type="text"/>
                <div className="StrengthField">
                        <div className={strength === "Weak" ? "PasswordStrength Weak":
                        (strength === "Moderate" ? "PasswordStrength Moderate":
                        (strength === "Strong" ? "PasswordStrength Strong":"PasswordStrength"))}>

                        </div>
                        <div className={strength === "Moderate" ? "PasswordStrength Moderate":
                        (strength === "Strong" ? "PasswordStrength Strong":"PasswordStrength") } >
                            
                        </div>
                        <div className={strength === "Moderate" ? "PasswordStrength Moderate":
                        (strength === "Strong" ? "PasswordStrength Strong":"PasswordStrength")}>

                        </div>
                        <div className={strength === "Strong" ? "PasswordStrength Strong":"PasswordStrength" }>

                        </div>
                </div>
                <div style={{color:"grey",marginTop:"10px"}}>
                 Use 8 or more characters with a mix of upper and lower case letters, numbers & symbols.
                </div>
                
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