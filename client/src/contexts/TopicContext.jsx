import React, {createContext,useContext,useState} from "react"

const TopicContext = createContext()

export function UseTopic(){
    return useContext(TopicContext)
}


export function TopicProvider({children}){
    const [topic,setTopic] = useState("")

    const WriteTopic =(e)=>{
        setTopic(e)
    }

    return(
        <TopicContext.Provider value={{topic,WriteTopic}}>
            {children}
        </TopicContext.Provider>
    )
}