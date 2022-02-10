import { useEffect } from "react"
import { TitleCameraOff } from "../../../../CcVideo"
import { useStyles } from "../../../Styles/style"
import PseudoC from "./PseudoC"
import Video from "./Video"

const IndexVideo= (props: any)=> {
    const classes= useStyles()
    
    return (
        <div className={`_8700 ${classes.videoComponent}`}>
            <PseudoC />
            <Video />
            <TitleCameraOff />
        </div>
    )
}

export default IndexVideo