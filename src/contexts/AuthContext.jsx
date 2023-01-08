import {createContext,useContext,useEffect,useState} from "react"
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from "firebase/auth"
import { auth } from "../firebase"

const UserContext = createContext()

export const AuthContextProvider =({children})=>{
    const [user,setUser] = useState(null)
    
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
        <UserContext.Provider value={{createUser,logOut,signIn,user}}>
            {children}
        </UserContext.Provider>
    )
}