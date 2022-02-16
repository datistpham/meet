import { useContext } from "react"
import { ContextT } from "../../T"
import { useStore } from "../../../../../zustand/store"

const VideoSpecialIndex= (props: any)=> {
    const { peers, myRef }= useContext(ContextT)
    const checkVideo= useStore(state=> state.checkVideo)
    return (
        <video ref={myRef} autoPlay muted playsInline style={{width: props.sharing=== false ?  "100%" : 234, height: props.sharing=== false ? "100%" : 132, transform: 'scaleX(-1)', position: props.sharing=== false ? 'relative' : "absolute", zIndex: 2, display: checkVideo=== true ? "block" : "none", right: props.sharing=== true ? 16: 0, bottom: props.sharing=== true ? 16 : 0, borderRadius: props.sharing=== true ? 10 : 0 }} />
    )
}

export default VideoSpecialIndex