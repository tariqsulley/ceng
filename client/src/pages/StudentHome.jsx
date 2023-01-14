import React from "react"
import "../styles/StudentHomeStyles.css"
import HomeCard from "../components/HomeCard"


const StudentHome =()=>{
    return(
        <div className="Student-Home">
                <div className="Home-Top">
                    <div className="Top-Left">
                    <p style={{fontWeight:"bold",fontSize:"24px",color:"black",paddingLeft:"30px"}}> Student Home </p>
                    <p className="Year" style={{color:"black",paddingLeft:"30px"}}> 2022/2023 Academic Year </p>
                    </div>
                    <div className="Top-Right">
                        <p style={{color:"Black",paddingRight:"30px"}}> Tuesday, January 10 2023</p>
                    </div>
                </div>
                <div className="Card-Section">
                    <HomeCard title="Report Submission" text1="Open Date" text2 ="Close Date" 
                    status1="24/10/23" status2="27/10/23" />
                    <HomeCard title="Topic Submission" text1="Open Date" text2 ="Close Date" 
                    status1="05/01/23" status2="20/03/23"/>
                    <HomeCard title="Submission Status" text1="Topic Submission" 
                    text2="Report Submission" status1="Opened" status2="Closed"  />
                </div>
        </div>
    )
}

export default StudentHome