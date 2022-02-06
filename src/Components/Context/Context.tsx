import React, { createContext, useEffect } from "react"
import { getAuth } from "firebase/auth"
import { useState } from "react"
import { nanoid } from "nanoid"
// import { v4 as uuidv4 } from 'uuid'

interface Context {
    email?: string | null
    photoUrl?: string | null
    username?:string | null
    refreshInfo?: any,
    newRoom?: string | null,
    createNewRoomLater?: any
}
type Props= {
    children: React.ReactNode
}
const initialContext: Context = {
    email: "",
    photoUrl: "",
    username: "",
    refreshInfo: null,
    newRoom: ""
}
const MyContext= createContext<Context>(initialContext)
const ContextApp= ({children}: Props): JSX.Element => {
    const auth= getAuth()   
    const [user, setUser]= useState<Context | null>({email: "", photoUrl: null, username: null ,newRoom: ""})
    useEffect(()=> {
        auth.onAuthStateChanged(res=> {
            if(res !== null) {
                setUser(prev=> ({...prev, email: res.email, photoUrl: res.photoURL, username: res.displayName}))
            }
        })
    },[auth])
    const refreshInfo= ()=> {
        setUser(prev=> ({...prev, email: "", photoUrl: null, username: null}))
    }   
    const createNewRoomLater= (): void=> {
        setUser(prev=> ({...prev, newRoom: nanoid()}))
    }
    
    return (
        <MyContext.Provider
            value={{
                email: user!.email!, 
                photoUrl: user!.photoUrl, 
                username: user!.username, 
                refreshInfo: refreshInfo,
                newRoom: user!.newRoom,
                createNewRoomLater: createNewRoomLater
            }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, ContextApp }