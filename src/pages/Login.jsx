import React, {useEffect} from "react"
import "../styles/LoginStyles.css"
import svg from "../assets/engineers.svg"

const Login =()=>{
    useEffect(() => {
        // Add event listener to listen for input field focus
        window.addEventListener('focus', handleInputFocus);
    
        // Remove event listener when the component unmounts
        return () => {
          window.removeEventListener('focus', handleInputFocus);
        };
      }, []); // Empty array ensures that the effect is only run on mount and unmount
    
      const handleInputFocus = (e) => {
        // Check if the focused element is an input field
        if (e.target.tagName === 'INPUT') {
          // Calculate the position of the input field
          // You may need to adjust these values based on your layout
          const inputPosition = e.target.offsetTop - e.target.offsetHeight;
          // Scroll to the position of the input field
          window.scrollTo(0, inputPosition);
        }
      };

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
                    <img className="Svg" alt="engineers svg" src={svg}/>
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
               <form label="login-form" className="form">
                <div className="Email-Field">
                     <div className="Email-Txt">Email Address</div>
                    <input className="Email-Input" type="text"/>
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
                    <input className="Password-Input" type="password"/>
                </div>
                <button className="Btn"> Sign In </button>
               </form>
            </div>
        </div>
    )
}

export default Login