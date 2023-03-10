import React, { useEffect,useState } from "react";
import "../styles/HomeStyles.css"
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import SubmitPage from "./Submit";
import StudentHome from "./StudentHome";
import ReportSubmit from "./ReportSubmit";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CircularProgress from '@mui/material/CircularProgress';


const Home = ()=>{
    const[page,setPage] = useState()
    const[width,setWidth] = useState(window.innerWidth)
    const [menu,setMenu] = useState()
    const[clicked,setClicked] = useState(false)
    const {user,logOut} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async()=>{
        try{
            setClicked(!clicked)
            await logOut()
            navigate("/")
        }catch(e){
            console.log(e.message)
        }
    }

    
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }


    useEffect(() => {
        setPage(1)
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }, []);

   
    return(
        <div className="HomePage">
            <div className="Bar">
            </div>
            
            <div 
className={isMenuVisible ===true?"Menu":"Menu-Mobile" && width > 900 ? "Menu":"Menu-Mobile"}>
               <div className="Top-Field">
               <div className="Title-Field">
               <div className="Ceng-Field">
               <p className="Coe-Txt">CoE Ceng Portal</p>
               </div>
               <div className="Home-Field">
                <p onClick={()=>{setPage(1);setIsMenuVisible(!isMenuVisible)}} className="Student-Txt">
                   <HomeOutlinedIcon style={{fontSize:29,marginTop:-4}}/> Student Home</p>
               </div>
               </div>

               <div className="Tools-Field">
                    <div className="Tool-Txt">
                        Tools
                    </div>
                    <div className="Submit-Field">
                        <p onClick={()=>{setPage(2);setIsMenuVisible(!isMenuVisible)}} className="Student-Txt">
                          <MessageOutlinedIcon/>  Submit Your Topic</p>
                    </div>
                    <div className="Upload-Field">
                        <p onClick={()=>{setPage(3);setIsMenuVisible(!isMenuVisible)}} className="Student-Txt">
                        <FileUploadOutlinedIcon/> Upload Your Report</p>
                    </div>
               </div>
               </div>

               <div className="Bottom-Field">
               <button className="Log-Btn" onClick={handleLogout}>
               {clicked === false ? "Log Out":<CircularProgress sx={{color:"white"}} size="1rem"/>}
                </button>
               </div>
            </div>
            <div className="Content">
            <div onClick={toggleMenu} className="Toggle">
            <div className="Bar1"></div>
            <div className="Bar2"></div>
            <div className="Bar3"></div>
            </div>
             {page === 1 ? <StudentHome/>:page === 2 ? <SubmitPage/>:<ReportSubmit/> }
            </div>
        </div>
    )
}

export default Home