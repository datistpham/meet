import React from "react"

const CcVideoS3= (props: any)=> {
    return (
        <video className="_2400" ref={props.userVideo} muted autoPlay playsInline style={{maxHeight: '448px',objectFit: 'cover',width: '100%',position: 'relative', zIndex: 2, transform: 'scaleX(-1)', height: '100%'}} />
    )
}

export default React.memo(CcVideoS3)