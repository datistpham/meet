import { PerMessage, Section4, Section5, Section51, Section512, Section52 } from "./C3"
import { nanoid } from "nanoid"
import { useState, useRef, useEffect, Fragment, useContext, memo } from "react"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { MyContext } from "../../../../../../../../Components/Context/Context"
import { useParams } from "react-router-dom"
import date from 'date-and-time'

const FrameChat= (props: any)=> {
    const now = new Date()
    const { tokenId, socketRefB, username }= useContext(MyContext)
    const { roomID }= useParams()
    const [text, setText]= useState<string>(()=> "")
    
    const isSetText= (e: any)=> {
        setText(()=> e.target.value)
    }
    const sendMessage= ()=> {
        socketRefB.current.emit("send message", { roomID, text, username, timestamp: date.format(now, 'HH:mm') , tokenId, faketime: date.format(now, 'HH:mm')})
        setText(()=> "")
    }
    useEffect(()=> {
        socketRefB.current.on("all message", (data: any)=> {
           props.setMessageRoom(()=> data.data)
        })
    }, [socketRefB, props])
const myRef= useRef<any>(null)
    return (
        <Fragment>
            <Section4 ref={myRef} className="_0rujefda">
                {/* main message */}
                {
                    props.messageRoom.map((item: any)=> <PerMessage height={(item.username==="" && item.timestamp==="") ? 0 : 20} paddingTop={(item.username==="" && item.timestamp==="") ? 10 : 0} key={nanoid()} username={item.username} timestamp={item.timestamp} text={item.text} />)
                }
            </Section4>
            <Section5>  
                <Section51>
                    <Section512 value={text} placeholder="Send message to everyone" onChange={(e)=> isSetText(e)}>
                    </Section512>
                </Section51>
                <Section52 onClick={()=> sendMessage()} >
                    <SendOutlinedIcon style={{width: 24, height: 24, color: 'rgba(60,64,67,0.38)'}} />
                </Section52>
            </Section5>
        </Fragment>
    )
}

export default memo(FrameChat)