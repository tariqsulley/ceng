import {createContext,useContext,useEffect,useState} from "react"
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from "firebase/auth"
import { auth,db } from "../firebase"
import {addDoc, collection, setDoc, doc} from "firebase/firestore"

const UserContext = createContext()

export const UserAuth = ()=>{
    return useContext(UserContext)
}

export const AuthContextProvider =({children})=>{
    const [user,setUser] = useState()
    
    const createUser = async (email,password,FirstName,LastName,IndexNumber,StudentID)=>{  
        await createUserWithEmailAndPassword(auth,email,password).then(async(res)=>{
            const user = res.user
            const docRef = await addDoc(collection(db,"studentinfo"),{
                uid: user.uid,
                firstname: FirstName,
                lastname: LastName,
                indexnum: IndexNumber,
                studentid: StudentID
             })
             console.log("Document written with ID: ", docRef.id)
        })
        .catch((error) => {
            console.log(error);
          });
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

