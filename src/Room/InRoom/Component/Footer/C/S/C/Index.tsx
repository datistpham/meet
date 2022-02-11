import { useStyles } from "../../../../../Style/main_style"
import CoreB from "./CoreB"
import MicOffIcon from '@mui/icons-material/MicOff'
import MicIcon from '@mui/icons-material/Mic'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined'
import IosShareIcon from '@mui/icons-material/IosShare'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CallEndIcon from '@mui/icons-material/CallEnd'
import { useState } from "react"
import { StateIndexCoreB } from "../../../../../../../docs/type/typestate_indexcoreb"

const initialState: StateIndexCoreB = {
    checkVideo: true,
    checkAudio: true,
    

}
const IndexCoreB= (props: any)=> {
    const classes= useStyles()
    const [state, setState]= useState<StateIndexCoreB>(()=> initialState)
    const toggleCheckVideo= ()=> {
        setState((prev)=> ({...prev, checkVideo: !state.checkVideo}))
    }
    const toggleCheckAudio= ()=> {
        setState((prev)=> ({...prev, checkAudio: !state.checkAudio}))
    }
    return (
        <div className={`${classes.indexCoreB} _u4w8ew`}>
            <CoreB actionF={toggleCheckAudio} actionF2={()=> console.log()} actionF3={()=> console.log()} backgroundColor={state.checkAudio=== true ? "#3c4043" : "#ea4335"} borderColor="transparent" icon={state.checkAudio=== true ? <MicIcon /> : <MicOffIcon />} title={state.checkAudio=== true ? "Turn off micro" : "Turn on micro"} />
            <CoreB actionF={toggleCheckVideo} actionF2={()=> console.log()} actionF3={()=> console.log()} backgroundColor={state.checkVideo=== true ? "#3c4043" : "#ea4335"} borderColor="transparent" icon={state.checkVideo=== true ? <VideocamOutlinedIcon /> : <VideocamOffOutlinedIcon />} title={state.checkVideo=== true ? "Turn on camera" : "Turn off camera"} />
            <CoreB actionF1={()=> console.log()} actionF2={()=> console.log()} actionF3={()=> console.log()} backgroundColor={"#3c4043"} borderColor="transparent" icon={<IosShareIcon />} title="Share now"  />
            <CoreB actionF1={()=> console.log()} actionF2={()=> console.log()} actionF3={()=> console.log()}backgroundColor={"#3c4043"} borderColor="transparent" icon={<MoreVertIcon />} title="Other options"  />
            <CoreB actionF1={()=> console.log()} actionF2={()=> console.log()} actionF3={()=> console.log()} backgroundColor={"#ea4335"} borderColor="transparent" icon={<CallEndIcon />} title="Leave call"  />
            
        </div>
    )
}

export default IndexCoreB