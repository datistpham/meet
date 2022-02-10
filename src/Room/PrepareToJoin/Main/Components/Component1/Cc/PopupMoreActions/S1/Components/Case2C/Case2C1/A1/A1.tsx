import Co, { Co1 } from "./Co"
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined'
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined'
import { useContext } from "react"
import { ContextRoom } from "../../../../../../../../../../../Index"

const A1= (props: any)=> {
    const { listaudioinput, listaudiooutput, listcamerainput, audioName, webcamName, videoParallel, audioParallel }= useContext<any>(ContextRoom)
    const { chooseAudio, chooseCamera }= useContext(ContextRoom)

    return (
        <div className="_8q93" style={{width: '100%',display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', position: "relative"}}>
            <Co chooseDevice={chooseCamera} devices={webcamName} list={listcamerainput} icon={<VideocamOutlinedIcon />} category="Camera"  />
            {
                videoParallel=== false &&
            <Co5 title="Camera is off" />
            }
            <Co chooseDevice={chooseAudio} devices={audioName} list={listaudioinput} icon={<MicNoneOutlinedIcon />} category="Micro" />
            {
                audioParallel=== false &&
                <Co5 title="Micro is off" />
            }
            <Co chooseDevice={chooseAudio} devices={listaudiooutput[0].label} list={listaudiooutput} icon={<SpeakerOutlinedIcon />} category="Speaker" />
            <Co1 />
        </div>
    )
}
const Co5= (props: any)=> {
    return (
        <div style={{ padding: "6px 14px", borderRadius: 80, margin: "8px 0", textAlign: 'left', width: "max-content", border: "1px solid #c5221f", color: "#c5221f", backgroundColor: "#fce8e6", boxSizing: 'border-box', justifySelf: "flex-start", alignSelf: "flex-start"}}>
            {props.title}
        </div>
    )
}
export default A1