import React, { createContext, useContext, useState } from "react";

export const UserStyle = createContext(null)

export const UseStyle=()=>{
    return useContext(UserStyle)
}

export function StyleProvider({children}){
    const [value,setValue] = useState("LeftSide")

    function Toggle(){
        setValue("FixedSide")
    }

    return(
        <UserStyle.Provider value={{value,Toggle}}>
            {children}
        </UserStyle.Provider>
    )
}

