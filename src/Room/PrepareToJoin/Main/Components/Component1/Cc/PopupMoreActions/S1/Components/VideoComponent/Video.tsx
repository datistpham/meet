import { useContext } from "react"
import { ContainerPContext } from "../../../../../../../../../Container/Container"
import { ContextRoom } from "../../../../../../../../../Index"
import { ContextPopup } from "../../../Container"
import { useStyles } from "../../../Styles/style"


const Video= (props: any)=> {
    const classes= useStyles()
    const { userVideo }= useContext(ContextPopup)
    const { openBrightness }= useContext(ContainerPContext)
    const { videoParallel }= useContext(ContextRoom)
    return (
        <video style={{display: `${videoParallel=== true ? "block" : "none"}`,filter: `brightness(${openBrightness=== true ? "2": "1"})`, position: 'absolute',top: 0, zIndex: 3}} ref={userVideo} className={`S3RDod ${classes.videoM}`} autoPlay muted playsInline />
    )
}

export default Video