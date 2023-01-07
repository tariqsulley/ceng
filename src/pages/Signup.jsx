import React from "react";
import LeftDisplay from "../components/LeftDisplay";
import "../styles/SignUpStyles.css"
import { Link } from "react-router-dom";

const Signup = ()=>{

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
                <input  className="Input" type="text"/>
                </div>

                <div className="Last-Name">
                <p style={{color:"black"}}> Last Name </p>
                <input className="Input" type="text"/>
                </div>
                
                </div>

                <div className="Contact-Section">
                <p style={{color:"black"}}> Email Address </p>
                <input className="Input" type="text"/>
                <p style={{color:"black"}}> Student ID </p>
                <input className="Input" type="text"/>
                <p style={{color:"black"}}> Index Number </p>
                <input className="Input" type="text"/>
                <p style={{color:"black"}}> Passwword </p>
                <input className="Input" type="text"/>
                <p style={{color:"black"}}> Confirm Password </p>
                <input className="Input" type="text"/>
                <button className="Btn"> Submit </button>
                </div>
            </div>

            </div>      
        </div>
    )
}

export default Signup