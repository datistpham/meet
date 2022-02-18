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
import { useTranslation } from "react-i18next"

const AlertNewRoomLater= lazy(()=> import("./AlertNewRoomLater/AlertNewRoomLater"))

const F= (props: any)=> {
    const { t }= useTranslation()

    const classes= useStyles()
    const classes2= useStyles2()
    const { createNewRoomLater, socketRefB }= useContext(MyContext)
    const [openAlert, setOpenAlert]= useState<boolean>( ()=> false)
    const openAlertTrue= ()=> {
        setOpenAlert(()=> true)
    }
    const openAlertFalse= ()=> {
        setOpenAlert(()=> false)
    }
    const createNewMeetingRoomRightNow= async ()=> {
        const id= nanoid()
        await socketRefB.current.emit("add-room", { room: id })
        window.location.href=`https://localhost:3000/${id}/auth_user=1`
    }   

    return (
        <div className={`_7800 ${classes.f}`} >
            <ContainerF openAlertTrue={openAlertTrue} createNewRoomLater={createNewRoomLater} icon={<InsertLinkIcon />} title={`${t("button.button3")}`} />
            
            <ContainerF createNewRoomLater={createNewMeetingRoomRightNow} icon={<AddIcon />} openAlertTrue={()=> console.log()} title={`${t("button.button4")}`} />
            
            {
                openAlert=== true &&<Suspense fallback={<div className={classes2.alertNewRoomLater}><CircularProgress /></div>}> <AlertNewRoomLater popUpFalseTest={props.popUpFalseTest} openAlertTrue={openAlertTrue} openAlertFalse={openAlertFalse} /></Suspense>
            }
        </div>
    )
}

export default F