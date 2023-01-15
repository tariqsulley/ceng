import React, {useEffect} from "react"
import "../styles/SubmitInputStyles.css"
import TextField from '@mui/material/TextField';

const SubmitInput = ()=>{
    return(
        <div className="SubmitInputPage">
            <TextField id="outlined-basic" label="Submit Topic" variant="outlined" />
        <button className="SubmitInputBtn">
            Submit
        </button>
        </div>
    )
}


export default SubmitInput