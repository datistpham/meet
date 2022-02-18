import { useStyles } from "../../../Index"
import { io } from "socket.io-client"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import DontExist from "./DontExist"

const E= (props: any)=> {
    const classes= useStyles()
    const socketRef= useRef<any>(null)
    const [conditionExist, setConditionExist]= useState<boolean | null>(null)
    useEffect(()=> {
        socketRef.current= io("http://localhost:4000/", { transports: ["websocket", "polling"] })
    })

    const checkRoom = ()=> {
        socketRef.current.emit("check room", {roomID: props.code})
        socketRef.current.on("check room done", (data: any)=> {
            if(data.exist=== false) {
                setConditionExist(()=> false)
                props.refreshValue()
            }
            else {
                window.location.replace(`https://localhost:3000/${props.code}`)
            }
        })
        
    }
    return (
        <div style={{position: 'relative'}}>
            <button onClick={()=> checkRoom()} disabled={props.disable} className={classes.e} style={{color: props.color, border: "none", outline: "none", background: 'none', cursor: props.disable===true ? "context-menu" : "pointer"}}>
                {props.title}
                
            </button>
            {
                conditionExist=== false &&
                <DontExist />
            }
        </div>
    )
}

export default E