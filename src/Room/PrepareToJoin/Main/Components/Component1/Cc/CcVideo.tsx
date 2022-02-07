import CcVideoS1 from "./CcVideoS1"
import CcVideoS2 from "./CcVideoS2"
import { ContextRoom } from "../../../../../Index"
import React, { useContext } from "react"
import { lazy, Suspense } from "react"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const CcVideoS3= lazy(()=> import("./CcVideoS3"))

const CcVideoVip= (props: any)=> {
    return (
        <div className="_8100" style={{width: "100%",maxWidth: '100%',height: '100%', position: "absolute", top: 0, left: 0,right: 0, borderRadius: 10, overflow: 'hidden', backgroundColor: '#202124'}}>
            <CcVideoS1 />
            <Suspense fallback={<div style={{width: "100%", height: "100%",position: "absolute", top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center',alignItems: "center", backgroundColor: "#000", zIndex: 4}}><div style={{fontSize: 24, color: "#fff", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Camera is running</div></div>}>
                <CcVideoS3 />
            </Suspense>
            <CcVideoS2 />
            <TitleCameraOff />
            
        </div>
    )
}
const TitleCameraOff= ()=> {
    const { zIndex }= useContext(ContextRoom)
    return (
        <div style={{fontSize:24, color: "#fff", width: '100%', textAlign: 'center', position: 'absolute', top: '50%', transform: "translate(0%, -50%)", left: 0, zIndex: zIndex}}>
            Camera is off
        </div>
    )
}
const MicroConnected= ()=> {
    return (
        <div style={{padding: "8", borderRadius: 80}}>
            <VolumeUpIcon />
        </div>
    )
}

export default React.memo(CcVideoVip)