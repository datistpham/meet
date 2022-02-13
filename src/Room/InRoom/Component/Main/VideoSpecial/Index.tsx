import { useContext } from "react"
import { ContextT } from "../../T"

const VideoSpecialIndex= ()=> {
    const { peers, myRef }= useContext(ContextT)
    return (
        <video ref={myRef} autoPlay muted playsInline style={{width: 400, height: 500}} />
    )
}

export default VideoSpecialIndex