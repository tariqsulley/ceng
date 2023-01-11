import {createContext,useContext,useEffect,useState} from "react"
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from "firebase/auth"
import { auth } from "../firebase"

const UserContext = createContext()


export const AuthContextProvider =({children})=>{
    const [user,setUser] = useState()
    const [LastName,setLastName] = useState("")
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const [PasswordCon,setPasswordCon] = useState("")
    const [StudentID,setStudentID] = useState("")
    const [IndexNumber,setIndexNumber] = useState("") 
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    return (
        <UserContext.Provider value={{createUser,logOut,signIn,user,LastName,Email,Password,PasswordCon,
        StudentID,IndexNumber}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(UserContext)
}

