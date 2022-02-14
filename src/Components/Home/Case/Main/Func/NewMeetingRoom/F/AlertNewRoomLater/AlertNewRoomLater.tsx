import { makeStyles } from "@mui/styles"
import C from "./C"
import { MyContext } from "../../../../../../../Context/Context"
import { useContext } from "react"
import { CircularProgress } from "@mui/material"
import { useState } from "react"
import { Animate } from "react-simple-animate"
import { useTranslation } from "react-i18next"


export const useStyles= makeStyles({
    alertNewRoomLater: {
        width: '100%',
        height: '100%',
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.502)',

    },
    c: {
        width: 400,
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 8,
        boxSizing: 'border-box',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)"
    },
    c1: {
        width: '100%',
        padding: '24px 24px 20px 24px',
        height: 92,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    c1_ :{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 600
    },
    c2: {
        textAlign: 'left',
        color: '#5f6368',
        fontWeight: 600,
        marginBottom: 12
    },
    c3: {
        width: '100%',
        paddingLeft: 12,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f1f3f4',
        borderRadius: 4
    },
    containerC2C3: {
        width: "100%",
        padding: "0 24px 24px 24px",
        height: 144,
        boxSizing: 'border-box'
    },
    close: {
        color: "#757575",
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '50%',
        transition: 'all .15s ease-in-out',
        "&:hover": {
            backgroundColor: "#f2f0f5"
        }
    },c32: {
        transition: 'all .1s ease-in-out',
        borderRadius: '50%',
        "&:hover": {
            backgroundColor: "#f2f0f5",

        }
    }
})
const AlertNewRoomLater = (props: any) => {
    const { t }= useTranslation()

    const classes= useStyles()
    const { newRoom }= useContext(MyContext)
    const [copied, setCopied]= useState<boolean>(()=> false)
    const al= ()=> {
        setCopied(()=> true)
        setTimeout(()=> {
            setCopied(()=> false)
        },3000)
    }
    if(newRoom!.length< 1 ) {
        return (
            <div className={classes.alertNewRoomLater}>
                <CircularProgress />
            </div>
        )
    }
    else {
        return (
            <div className={classes.alertNewRoomLater}>
                <C al={al} newRoom={`localhost:3000/${newRoom}`} popUpFalseTest={props.popUpFalseTest} openAlertTrue={props.openAlertTrue} openAlertFalse={props.openAlertFalse} />
                {
                    copied=== true &&
                    <Animate
                        play={copied}
                    >
                        <div style={{position: 'absolute', bottom: 0, left: 0, padding: '14px 24px',borderRadius: 6, backgroundColor: '#202124', color: "#fff", marginLeft: 10, marginBottom: 10}}>
                            <div style={{color: "#fff", fontWeight: 600}}>{t("alert.title")}</div>
                        </div>
                    </Animate>
                }
            </div>
        )
    }
}

export default AlertNewRoomLater
