import React from "react";
import "../styles/CardStyles.css"

const Card = ({name,indexNum,topic})=>{
    return(
        <div className="Card-Body">
            <div className="Card-Top">
                <div className="Name-Field">
                    <p className="Card-Name"> Kofi Boateng</p>
                    <p className="Card-Index"> 7134567 </p>
                </div>
                <div className="State-Green">
                    Accepted
                </div>
            </div>
            <div className="Card-Bottom">
                <p className="Card-Title"> Topic Submitted</p>
                <p className="Card-Topic"> Inadequate Street Lights In The Lashibi Community</p>
            </div>
        </div>
    )
}

export default Card