import React, {useEffect, useState} from "react"
import "../styles/ReportSubmitStyles.css"

const ReportSubmit = ()=>{
    const [File,setFile] = useState(null)

    const handleChange = (e)=>{
        setFile(e.target.files[0])
    }
    useEffect(()=>{
        console.log(File)
    },[])
    return(
        <div className="ReportSubmitPage">

            <div className="ReportContent">
            <p style={{color:"black"}}> Upload Your Report</p>
            <input type="file" onClick={handleChange} accept="application/pdf"/>
            <div>
            {File && `${File.name} - ${File.type}`}
            </div>
            </div>
        
        </div>
    )
}

export default ReportSubmit