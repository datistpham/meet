import { useStyles } from "../../../../../Style/main_style"
import { Tooltip } from "@mui/material"
import NumberOfRoom from "./NumberOfRoom"
import { ContextRoom } from "../../../../../../Index"
import { useParams } from "react-router-dom"
import { useRef, memo, useContext, useState } from "react"
import { useRecoilState } from "recoil"
import { listMember } from "../../../../../../../recoil/atom"

const CCoreNumber= (props: any)=> {
    const classes= useStyles()
    const { roomID }= useParams()
    const { socketRef }= useContext(ContextRoom)
    const myRef= useRef<any>(null)
    // eslint-disable-next-line
    const [letMember, setListMember]= useRecoilState(listMember)
    const [clicked, setClicked]= useState<boolean>(()=> false)
    const showMemeber= async ()=> {
        await socketRef.current.emit("list user from client", { roomID })
        socketRef.current.once("list user from server", (data: any)=> {
            setListMember(data.list)
        })}
    const Onclick= ()=> {
        if(!clicked) {
            setClicked(()=> clicked)
            showMemeber()
        }
    }
    

    return (
        <Tooltip title={<div>{props.title}</div>} placement="top">
            <div ref={myRef} style={{position: 'relative'}} onClick={()=> {props.setPopuptrue();props.pOpen();Onclick()}} className={classes.ccore}>
                <span>{props.icon}</span>
                <NumberOfRoom />
            </div>
        </Tooltip>
    )
}

export default memo(CCoreNumber)