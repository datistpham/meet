import React, { createContext, useEffect, useRef } from "react"
import { getAuth } from "firebase/auth"
import { useState } from "react"
import { nanoid } from "nanoid"
import { io } from "socket.io-client"
// import { v4 as uuidv4 } from 'uuid'

interface Context {
    email?: string | null
    photoUrl?: string | null
    username?: string | null
    refreshInfo?: any,
    newRoom?: string | null,
    createNewRoomLater?: any,
    socketRefB?: any
}
type Props = {
    children: React.ReactNode
}
const initialContext: Context = {
    email: "",
    photoUrl: "",
    username: "",
    refreshInfo: null,
    newRoom: "",
    socketRefB: null
}
const MyContext = createContext<Context>(initialContext)
const ContextApp = ({ children }: Props): JSX.Element => {
    const auth = getAuth()
    const socketRefB = useRef<any>(() => null)
    const [user, setUser] = useState<Context | null>({ email: "", photoUrl: null, username: null, newRoom: "" })
    // eslint-disable-next-line
    const listRoom = useState<Array<string>>(() => [])
    const newPieceOfUrl = "s200-c"
    const originalPieceOfUrl = "s96-c"
    useEffect(() => {
        socketRefB.current = io("http://localhost:4000/", { transports: ["websocket", "polling"], withCredentials: true })
        auth.onAuthStateChanged(res => {
            if (res !== null) {
                setUser(prev => ({ ...prev, email: res.email, photoUrl: res.photoURL?.replace(originalPieceOfUrl, newPieceOfUrl), username: res.displayName }))
            }
        })
    }, [auth])
    const refreshInfo = () => {
        setUser(prev => ({ ...prev, email: "", photoUrl: null, username: null }))
    }
    const createNewRoomLater = (): void => {
        const id = nanoid()
        setUser(prev => ({ ...prev, newRoom: id }))
        socketRefB.current.emit("add-room", { room: id })
    }

    return (
        <MyContext.Provider
            value={{
                email: user!.email!,
                photoUrl: user!.photoUrl,
                username: user!.username,
                refreshInfo: refreshInfo,
                newRoom: user!.newRoom,
                createNewRoomLater: createNewRoomLater, socketRefB: socketRefB
            }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, ContextApp }