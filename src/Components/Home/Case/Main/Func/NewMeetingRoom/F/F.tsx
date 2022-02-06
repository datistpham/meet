import { useStyles } from "../../../../Index"
import ContainerF from "./ContainerF"
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import AddIcon from '@mui/icons-material/Add'
import { MyContext } from "../../../../../../Context/Context"
import { useContext } from "react"
import { useState } from "react"
import { lazy, Suspense } from "react"
import { CircularProgress } from "@mui/material"
import { useStyles as useStyles2 } from "./AlertNewRoomLater/AlertNewRoomLater"
import { nanoid } from "nanoid"
import { useNavigate } from "react-router-dom"
const AlertNewRoomLater= lazy(()=> import("./AlertNewRoomLater/AlertNewRoomLater"))

const F= (props: any)=> {
    const classes= useStyles()
    const classes2= useStyles2()
    const { createNewRoomLater }= useContext(MyContext)
    const [openAlert, setOpenAlert]= useState<boolean>( ()=> false)
    const [roomId, setRoomId ]= useState<string>(()=> "")
    const navigate= useNavigate()
    const openAlertTrue= ()=> {
        setOpenAlert(()=> true)
    }
    const openAlertFalse= ()=> {
        setOpenAlert(()=> false)
    }
    const createNewMeetingRoomRightNow= ()=> {
        const id= nanoid()
        setRoomId(()=> id)
        navigate(`/${id}`)
    }   

    return (
        <div className={`_7800 ${classes.f}`} >
            <ContainerF openAlertTrue={openAlertTrue} createNewRoomLater={createNewRoomLater} icon={<InsertLinkIcon />} title="Create a meeting for use later" />
            <ContainerF createNewRoomLater={createNewMeetingRoomRightNow} icon={<AddIcon />} openAlertTrue={()=> console.log()} title="Start a meeting right now" />
            {
                openAlert=== true &&<Suspense fallback={<div className={classes2.alertNewRoomLater}><CircularProgress /></div>}> <AlertNewRoomLater popUpFalseTest={props.popUpFalseTest} openAlertTrue={openAlertTrue} openAlertFalse={openAlertFalse} /></Suspense>
            }
        </div>
    )
}

export default F