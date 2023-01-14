import React, { createContext, useContext, useState } from "react";

export const UserStyle = createContext(null)

export const UseStyle=()=>{
    return useContext(UserStyle)
}

export function StyleProvider({children}){

    return(
        <UserStyle.Provider>
            {children}
        </UserStyle.Provider>
    )
}

