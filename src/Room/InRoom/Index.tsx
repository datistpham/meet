import { useState } from "react"
import { useContext } from "react"
// import { useEffect } from "react"
import { createContext } from "react"
import { ContextInRoomType } from "../../docs/type/contextin_roomtype"


const initialContext: ContextInRoomType= {
    stream: null,
}
const ContextInRoom= createContext(initialContext)
const InRoom= ({children}: any)=> {
    const [state, setState]= useState<{stream1: any, }>(()=> ({stream1: null}))
    // const { socketRef }= useContext(ContextRoom)
    // const socketRefAl= socketRef.current
    // useEffect(()=> {
    //     return ()=> {
    //         socketRefAl.emit("ccc", "da")
    //     }
    // },[socketRefAl])

    return (
        <ContextInRoom.Provider value={{stream: state.stream1}}>
            {children}
        </ContextInRoom.Provider>
    )
}

export {InRoom, ContextInRoom}