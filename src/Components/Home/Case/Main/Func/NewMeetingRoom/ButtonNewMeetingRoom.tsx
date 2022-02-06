import { useStyles } from "../../../Index"
import C from "../C/C"
import VideoCallIcon from '@mui/icons-material/VideoCall'
import F from "./F/F"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Animate } from "react-simple-animate"

const ButtonNewMeetingRoom = () => {
    const classes= useStyles()
    const myRef= useRef<any>()
    const [openPopup, setOpenPopup]= useState<boolean>( ()=> false)
    const popUpTrue= ()=> {
        setOpenPopup(()=> true)
    }
    const popUpFalseTest= ()=> {
        setOpenPopup(()=> false)
    }
    const handleClickOutSide= (e: Event)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setOpenPopup(()=> false)
        }
    }
    const handleClickInside= ()=> {
        setOpenPopup(()=> true)
    }
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutSide)
        return ()=> document.removeEventListener("mousedown", handleClickOutSide)
    })
    return (
        <div onClick={()=> {handleClickInside();popUpTrue()}} ref={myRef} className={classes.buttonNewMeetingRoom}>
            <C icon={<VideoCallIcon />} title="New room" style={{color: "#fff"}} />
            {
                openPopup=== true &&
                <Animate
                    play={openPopup}
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                >
                    <F popUpFalseTest={popUpFalseTest} a2={openPopup} a1={openPopup} />
                </Animate>
            }
        </div>
    )
}

export default ButtonNewMeetingRoom
