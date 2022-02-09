import Co, { Co1 } from "./Co"
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined'
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined'
import { useContext } from "react"
import { ContextRoom } from "../../../../../../../../../../../Index"

const A1= (props: any)=> {
    const {  }= useContext(ContextRoom)
    return (
        <div style={{width: '100%',display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
            <Co icon={<VideocamOutlinedIcon />} category="Camera" devices=""  />
            <Co icon={<MicNoneOutlinedIcon />} category="Micro" devices="" />
            <Co icon={<SpeakerOutlinedIcon />} category="Speaker" devices="" />
            <Co1 />
        </div>
    )
}

export default A1