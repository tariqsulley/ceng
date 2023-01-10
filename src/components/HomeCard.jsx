import React from "react";
import "../styles/HomeCardStyles.css"

const HomeCard = ({title})=>{
    return(
        <div className="Card">
            <p>{title}</p>
            <div className="Card-1">
                <p> Open Date</p>
                <p> 21/10/2022</p>
            </div>
            <div className="dotted">
                
            </div>
            <div className="Card-2">
                <p> Close Date</p>
                <p> 21/10/2022</p>
            </div>
        </div>
    )
}

export default HomeCard