
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import MicOffIcon from '@mui/icons-material/MicOff';
import ContainerC from "./CcVideoS2/ContainerC"
import ContainerC1 from './CcVideoS2/ContaierC1'
import { useState } from 'react'
import { turnOn_Off } from './F/Turn_on_off'
import { useContext } from 'react'
import { ContextRoom } from '../../../../../Index'

const CcVideoS2= (props: any)=> {
    return (
        <div className="_1800" style={{position: 'absolute', bottom: 0, left: 0, backgroundImage: "-webkit-linear-gradient(bottom,rgba(0,0,0,0.7) 0,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0) 100%)", width: '100%', height: 80, zIndex: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
            <ContainerCS />
            <ContainerC1 icon={<AutoAwesomeOutlinedIcon className="_5000" />} title="Apply visual effects" />

        </div>
    )
}
const ContainerCS= (props: any)=> {
    const [turn, setTurn]= useState<boolean>(() => false)
    const [turn2, setTurn2]= useState<boolean>(()=> false)
    const { turnOffCamera, turnOnCamera, turnOffMicro, turnOnMicro, backgroundColor, borderColor, backgroundColor2, borderColor2 }= useContext(ContextRoom)

    return (
        <div className='_7000' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', justifySelf: 'center'}}>
            <ContainerC backgroundColor={backgroundColor2} borderColor={borderColor2} actionF2={()=> turnOn_Off(setTurn2)} actionF={turn2=== true ? turnOnMicro : turnOffMicro} icon={turn2=== true ?<MicOffIcon /> : <KeyboardVoiceOutlinedIcon />} className="_5000" title={turn2=== true ? "Turn on micro" : "Turn off micro"} />
            <ContainerC backgroundColor={backgroundColor} borderColor={borderColor} actionF2={()=>turnOn_Off(setTurn)} actionF={turn=== true ? turnOnCamera : turnOffCamera} icon={turn=== true ? <VideocamOffIcon /> : <VideocamOutlinedIcon />} className="_5000" title={turn=== true ? "Turn on camera" : "Turn off camera"} />
        </div>
        
    )
}
export default CcVideoS2