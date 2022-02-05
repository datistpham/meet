import React, { createContext, useEffect } from "react"
import { getAuth } from "firebase/auth"
import { useState } from "react"

interface Context {
    email?: string | null
    photoUrl?: string | null
    username?:string | null
    refreshInfo?: any
}
type Props= {
    children: React.ReactNode
}
const initialContext: Context = {
    email: "",
    photoUrl: "",
    username: "",
    refreshInfo: null
}
const MyContext= createContext<Context>(initialContext)
const ContextApp= ({children}: Props): JSX.Element => {
    const auth= getAuth()   
    const [user, setUser]= useState<Context | null>({email: "", photoUrl: null, username: null})
    useEffect(()=> {
        auth.onAuthStateChanged(res=> {
            if(res !== null) {
                setUser(prev=> ({...prev, email: res.email, photoUrl: res.photoURL, username: res.displayName}))
            }
        })
    },[auth])
    const refreshInfo= ()=> {
        console.log(1234)
        setUser(prev=> ({...prev, email: "", photoUrl: null, username: null}))
    }
    return (
        <MyContext.Provider value={{email: user!.email!, photoUrl: user!.photoUrl, username: user!.username, refreshInfo: refreshInfo}}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, ContextApp }