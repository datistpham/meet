import { useContext } from "react"
import { ContextPopup } from "../../../Container"
import { useStyles } from "../../../Styles/style"


const Video= (props: any)=> {
    const classes= useStyles()
    const { userVideo }= useContext(ContextPopup)
    return (
        <video ref={userVideo} className={classes.videoM} autoPlay muted playsInline />
    )
}

export default Video