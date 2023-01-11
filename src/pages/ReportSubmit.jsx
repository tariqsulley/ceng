import React, {useEffect, useState} from "react"

const ReportSubmit = ()=>{
    const [File,setFile] = useState(null)

    const handleChange = (e)=>{
        setFile(e.target.files[0])
    }
    useEffect(()=>{
        console.log(File)
    },[])
    return(
        <div>
            <p style={{color:"black"}}> Upload Your Report</p>
            <input type="file" onClick={handleChange} accept="application/pdf"/>
            <div>{File && `${File.name} - ${File.type}`}</div>
        </div>
    )
}

export default ReportSubmit