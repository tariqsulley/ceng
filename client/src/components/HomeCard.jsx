import React from "react";
import "../styles/HomeCardStyles.css"

const HomeCard = ({title,text1,text2,status1,status2})=>{
    return(
        <div className="Card">
            <p style={{color:"#7E8299"}}>{title}</p>
            <div className="Card-1">
                <p style={{color:"black"}}> {text1}</p>
                <p className={status1 === "Closed" ? "Closed":status1 === "Opened" ? "Opened":"None"}> 
                {status1}</p>
            </div>
            <div className="dotted">
                
            </div>
            <div className="Card-2">
                <p style={{color:"black"}} > {text2}</p>
                <p className={status2 === "Closed" ? "Closed":status2 === "Opened" ? "Opened":"None"}>
                     {status2}</p>
            </div>
        </div>
    )
}

export default HomeCard
