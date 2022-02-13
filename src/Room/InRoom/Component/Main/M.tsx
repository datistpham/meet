// import { useContext } from "react"
// import { Video } from "../../../Index"
import { useCallback, useEffect } from "react"
import { useContext } from "react"
import { ContextRoom } from "../../../Index"
import { useStyles } from "../../Style/main_style"
import { io } from "socket.io-client"
import { useRef } from "react"
import { useParams } from "react-router-dom"
// import { ContextT } from "../T"

const M= (props: any)=> {
    const classes= useStyles()
    const { idSelf }= useContext(ContextRoom)
    const { roomID }= useParams()
    const socketRef= useRef<any>(null)

    // const { peers, myRef }= useContext(ContextT)
    const cleanup = useCallback( ()=> {
        socketRef.current= io(`http://localhost:8000/`, { transports: ['websocket', 'polling'] })
        socketRef.current.emit("user-disconnect", {idSelf, roomID})
    }, [socketRef, idSelf, roomID])
    useEffect(()=> {

        window.addEventListener("beforeunload", cleanup)     
        return ()=> window.removeEventListener("beforeunload", cleanup)   
    },[cleanup])
    return (
        <div className={classes.mainIndex}>
            {/* {peers.map((peer: any, index: any) => {
                return (
                    <Video key={index} peer={peer} />
                )
            })} */}
            {/* <video ref={myRef} autoPlay muted playsInline style={{width: 400, height: 500}} /> */}
        </div>
    )
}

export default M