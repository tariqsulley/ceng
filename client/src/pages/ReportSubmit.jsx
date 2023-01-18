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
            <p style={{color:"black"}}> Upload Your CENG Report</p>
            <label class="custom-file-upload">
            <input type="file"/>
                Upload
            </label>
            <button className="btn">
                Submit 
            </button>
            </div>
        
        </div>
    )
}

export default ReportSubmit