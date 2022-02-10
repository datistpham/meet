import React from "react"
import { useContext } from "react"
import { ContainerPContext } from "../../../../../Container/Container"


const CcVideoS3= (props: any)=> {
    const { openBrightness }= useContext(ContainerPContext)
    return (
        <video className="_2400" ref={props.userVideo} muted autoPlay playsInline style={{maxHeight: '448px',objectFit: 'cover',width: '100%',position: 'relative', zIndex: 2, transform: 'scaleX(-1)', height: '100%', filter: `brightness(${openBrightness=== true ? "2": "1"})`}} />
    )
}

export default React.memo(CcVideoS3)