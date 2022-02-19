import { useContext, memo } from "react"
import { ContextT } from "../../T"
import { Video } from "../../../../Index"


const VideoOtherPeople= (props: any)=> {
    const { peers }= useContext(ContextT)
    // eslint-disable-next-line
    return (
        <>
            {peers.map((peer: any, index: any) => {
                return (
                    <div className="zWfAib" style={{width: (peers.length===1 && "calc(50% - 5px)") || (peers.length===2 && "calc(100% / 3 - 6.666666px)")|| (peers.length===4 && "calc(100% / 5 - 7px)")|| (peers.length===5 && "calc(100% / 6 - 9px)")|| (peers.length===6 && "calc(100% / 7 - 11.666666px)")|| (peers.length===7 && "calc(100% / 8 - 12.666666px)")|| (peers.length===2 && "calc(100% / 9 - 15.666666px)")|| (peers.length===9 && "calc(100% / 10 - 18.666666px)")  || "100%", display: 'flex', height: 'max-content', position: 'relative', maxHeight: '100%'}} key={index}>
                        <Video peer={peer} />
                    </div>
                    
                )
            })}
        </>
    )
}

export default memo(VideoOtherPeople)