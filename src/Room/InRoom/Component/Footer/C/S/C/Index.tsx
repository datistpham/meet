import { useStyles } from "../../../../../Style/main_style"
import CoreB from "./CoreB"
import MicOffIcon from '@mui/icons-material/MicOff'
import MicIcon from '@mui/icons-material/Mic'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CallEndIcon from '@mui/icons-material/CallEnd'
import React, { useState, useContext } from "react"
import { StateIndexCoreB } from "../../../../../../../docs/type/typestate_indexcoreb"
import { ContextT } from "../../../../T"
import { useStore } from "../../../../../../../zustand/store"

import ShareScreen from "./Functionality/ShareScreen/ShareScreen"
import MoreOptions from "./Functionality/MoreOptions/MoreOptions"
import EndCallFunc from "./Functionality/EndCall/F/EndCallFunc"
const initialState: StateIndexCoreB = {
    checkVideo: true,
    checkAudio: true,

}
const IndexCoreB= (props: any)=> {
    
    const classes= useStyles()
    const [state, setState]= useState<StateIndexCoreB>(()=> initialState)
    const { turnOffCamera, turnOffMicro, turnOnCamera, turnOnMicro }= useContext(ContextT)
    const setCheckToggleAudioZustand= useStore(state=> state.setCheckToggleAudio)
    const setCheckToggelVideoZustand= useStore(state=> state.setCheckToggleVideo)
    const toggleCheckVideo= ()=> {
        setState((prev)=> ({...prev, checkVideo: !state.checkVideo}))
        setCheckToggelVideoZustand()
    }
    const toggleCheckAudio= ()=> {
        setState((prev)=> ({...prev, checkAudio: !state.checkAudio}))
        setCheckToggleAudioZustand()
    }
    return (
        <div className={`${classes.indexCoreB} _u4w8ew`}>
            <CoreB actionF={toggleCheckAudio} actionF2={state.checkAudio=== true ? (()=> turnOffMicro()) : (()=> turnOnMicro())} actionF3={()=> console.log()} backgroundColor={state.checkAudio=== true ? "#3c4043" : "#ea4335"} borderColor="transparent" icon={state.checkAudio=== true ? <MicIcon /> : <MicOffIcon />} title={state.checkAudio=== true ? "Turn off micro" : "Turn on micro"} />
            <CoreB actionF={toggleCheckVideo} actionF2={state.checkVideo=== true ? (()=> turnOffCamera()) : (()=> turnOnCamera())} actionF3={()=> console.log()} backgroundColor={state.checkVideo=== true ? "#3c4043" : "#ea4335"} borderColor="transparent" icon={state.checkVideo=== true ? <VideocamOutlinedIcon /> : <VideocamOffOutlinedIcon />} title={state.checkVideo=== true ? "Turn on camera" : "Turn off camera"} />
            <ShareScreen isSharing={props.isSharing} />
            <MoreOptions fullScreening={props.fullScreening} setFullScreening={props.setFullScreening} handleFullScreen={props.handleFullScreen} handleExitFullScreen={props.handleExitFullScreen} />
            <EndCallFunc />
            
        </div>
    )
}

export default IndexCoreB