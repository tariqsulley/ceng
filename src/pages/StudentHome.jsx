import React from "react"
import "../styles/StudentHomeStyles.css"
import HomeCard from "../components/HomeCard"


const StudentHome =()=>{
    return(
        <div className="Student-Home">
                <div className="Home-Top">
                    <div className="Top-Left">
                    <p style={{fontWeight:"bold",fontSize:"24px"}}> Student Home </p>
                    <p className="Year"> 2022/2023 Academic Year </p>
                    </div>
                    <div className="Top-Right">
                        <p> Tuesday, January 10 2023</p>
                    </div>
                </div>
                <div className="Card-Section">
                    <HomeCard title="Report Submission"/>
                    <HomeCard title="Total Submission"/>
                    <HomeCard title="Submission Status"/>
                </div>
        </div>
    )
}

export default StudentHome