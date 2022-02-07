import React, { useContext } from "react"
import { ContextRoom } from "../../../../../Index"

const CcVideoS3= (props: any)=> {
    const { userVideo }= useContext(ContextRoom)
    return (
        <video className="_2400" ref={userVideo} muted autoPlay playsInline style={{maxHeight: '448px',width: '100%',objectFit: 'cover',position: 'relative', zIndex: 2, transform: 'scaleX(-1)', height: '100%'}} />
    )
}

export default React.memo(CcVideoS3)