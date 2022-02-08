// import { VideoC } from "../../../CcVideo"
// import { ContextRoom } from "../../../../../../../../Index"
import { useStyles } from "../../Styles/style"
import IndexVideo from "./VideoComponent/IndexVideo"


const Case1= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`_3042 ${classes.case1}`}>
            {/* <VideoC /> */}
            {/* {
                props.toggleVideo=== true &&
            } */}
            {/* <CcVideoS3 userVideo={ userVideo} /> */}
            <IndexVideo />
        </div>
    )
}

export default Case1