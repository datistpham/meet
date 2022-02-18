import { useStyles } from "../../../Index"
import KeyboardIcon from '@mui/icons-material/Keyboard';
import D from "../D/D";
import { useState } from "react";
import E from "./E"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"


const ButtonJoinMeetingRoom = () => {
    const { t }= useTranslation()
    const classes= useStyles()
    const [state, setState]= useState<{borderColor: string, joinRoom: boolean, backgroundColor: string, checkValue: boolean, color: string}>({borderColor:"", joinRoom: false, backgroundColor: "", checkValue: false, color: ""})
    const checkValue= ():void => {
        setState(prev=> ({...prev, checkValue: true, backgroundColor: "#067cf191", color: "#1a73e8"}))
    }
    const checkValueEmpty= (): void=> {
        setState(prev=> ({...prev, checkValue: false, backgroundColor: "none", color: "#333"}))
    }
    const useStyles2= makeStyles({
        buttonJoinRoom: {
            width: 85,
            height: 48,
            borderRadius: 6,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            top: 0,
            left: '100%',
            marginLeft: 20,
            transition: "all 0.1s linear",
            position: 'absolute',
            zIndex: 999,
            "&:hover": {
                backgroundColor: state.backgroundColor
            }
        },
    })
    const classes2= useStyles2()
    const focusBorderColor= ()=> {
        setState((prev)=> ({...prev, borderColor: "#1a73e8", joinRoom: true}))
    }
    const blurBorderColor= ()=> {
        if(state.checkValue=== false) {
            setState((prev)=> ({...prev, borderColor: "", joinRoom: false}))
        }
    }
    const [code, setCode]= useState<string>(()=> "")
    const setValue= (e: any)=> {
        setCode(()=> e.target.value)
    }
    const refreshValue= ()=> {
        setCode(()=> "")
    }
    return (
        <div style={{position: 'relative'}} onFocus={()=> focusBorderColor()} onBlur={()=> blurBorderColor()}>
            <div className={classes.buttonJoinMeetingRoom} style={{borderColor: state.borderColor}} >
                <D code={code} setValue={setValue} icon={<KeyboardIcon />} title={`${t("button.button2")}`} style={{color: "#5f6368"}} checkValue={checkValue} checkValueEmpty={checkValueEmpty} />
            </div>
            {
                state.joinRoom=== true && 
                <div className={classes2.buttonJoinRoom} >
                    <E refreshValue={refreshValue} code={code} disable={!state.checkValue} color={state.color} title={t("alert.title4")} />
                </div>
            }
        </div>

    )
}

export default ButtonJoinMeetingRoom
