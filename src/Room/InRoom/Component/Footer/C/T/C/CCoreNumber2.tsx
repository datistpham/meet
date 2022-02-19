import { useStyles } from "../../../../../Style/main_style"
import { Tooltip } from "@mui/material"
import { useRef, memo, useState, useContext } from "react"
import { useRecoilState } from "recoil"
import { listMember } from "../../../../../../../recoil/atom"
import { MyContext } from "../../../../../../../Components/Context/Context"

const CCoreNumber2= (props: any)=> {
    const classes= useStyles()
    const myRef= useRef<any>(null)
    // eslint-disable-next-line
    const [letMember, setListMember]= useRecoilState(listMember)
    const [clicked, setClicked]= useState<boolean>(()=> false)
    const { socketRefB }= useContext(MyContext)
    const seeee= ()=> {
        socketRefB.current.on("all message", (data: any)=> {
            props.setMessageRoom(()=> data.data)
        })
    }
    const Onclick= ()=> {
        if(!clicked) {
            setClicked(()=> clicked)
            seeee()
        }
    }
    

    return (
        <Tooltip title={<div>{props.title}</div>} placement="top">
            <div ref={myRef} style={{position: 'relative'}} onClick={()=> {props.setPopuptrue();props.pOpen();Onclick()}} className={classes.ccore}>
                <span>{props.icon}</span>
            </div>
        </Tooltip>
    )
}

export default memo(CCoreNumber2)