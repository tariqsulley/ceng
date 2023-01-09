import React from "react";
import "../styles/CardStyles.css"

const Card = ({name,indexNum,topic})=>{
    return(
        <div className="Card-Body">
            <div className="Card-Top">
                <div className="Name-Field">
                    <p className="Card-Name"> Tariq Sulley</p>
                    <p className="Card-Index"> 7142121 </p>
                </div>
                <div className="State-Green">
                    Accepted
                </div>
            </div>
            <div className="Card-Bottom">
                <p className="Card-Title"> Topic Submitted</p>
                <p className="Card-Topic"> Lack Of Segregated Waste For</p>
            </div>
        </div>
    )
}

export default Card