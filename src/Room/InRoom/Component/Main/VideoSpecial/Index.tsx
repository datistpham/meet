import { useContext, memo } from "react"
import { ContextT } from "../../T"
import { useStore } from "../../../../../zustand/store"
// import { getPosition } from "../../../../../docs/f/drag_video"
// import { useState } from "react"
import Draggable from "react-draggable"
import Pseudo from "../Indentify/Pseudo"
import VideoOtherPeople from "./VideoOtherPeople"
import DetectMic from "../../../../../Components/Detectmic/DetectMic"



const VideoSpecialIndex= (props: any)=> {
    const { peers, myRef }= useContext(ContextT)
    const checkVideo= useStore(state=> state.checkVideo)
    // const numberOfRooms= useStore(state=> state.numberOfRooms)

    // const [position, setPosition]= useState<{left: number, top: number}>(()=> ({
    //     left: 0,
    //     top: 0
    // }))
    // const [percent, setPercent]= useState(()=> numberOfRooms)

    return (
        <div className="zWfAib" style={{ width: (props.popup=== true ? "calc(100% - 360px - 16px)" : "100%") , height: "100%", display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center', alignItems: 'center',}} >
            <VideoOtherPeople aff={props.aff} />
            <div style={{width: props.sharing=== false ?  ((peers.length===1 && "calc(50% - 5px)") || (peers.length===2 && "calc(100% / 3 - 6.666666px)")|| (peers.length===4 && "calc(100% / 5 - 7px)")|| (peers.length===5 && "calc(100% / 6 - 9px)")|| (peers.length===6 && "calc(100% / 7 - 11.666666px)")|| (peers.length===7 && "calc(100% / 8 - 12.666666px)")|| (peers.length===2 && "calc(100% / 9 - 15.666666px)")|| (peers.length===9 && "calc(100% / 10 - 18.666666px)")  || "100%") : 234, display: 'flex', height: props.sharing=== false ? ( checkVideo=== false ? "100%" : "max-content") : 132, position: props.sharing=== false ? 'relative' : 'absolute', maxHeight: '100%'}} className={`_ddksow zWfAib ${props.sharing=== true ? "_9w9wejdmw" : "_jreimklf"}`}>
                <DetectMic />
                <Draggable disabled={props.sharing===true ? false : true} >
                    <video className="zWfAib" ref={myRef} autoPlay muted playsInline style={{width: '100%' , position: props.sharing=== false ? 'relative' : "absolute", zIndex: 2, display: checkVideo=== true ? "block" : "none", right: props.sharing=== true ? 16: 0, bottom: props.sharing=== true ? 16 : 0, borderRadius: props.sharing=== true ? 10 : 0, cursor: props.sharing=== true ? "grab" : "context-menu", transform: 'scaleX(-1)'}} />
                </Draggable>
                {
                    checkVideo=== false &&
                    <Pseudo />
                }
            </div> {
                
            }
        </div>
    )
}

export default memo(VideoSpecialIndex)