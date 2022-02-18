import { useStyles } from "../../Style/main_style"
import IndexF from "./C/F/Def/Index"
import IndexS from "./C/S/Def/Index"
import IndexT from "./C/T/Def/Index"

const FooterIndex= (props: any)=> {
    const classes= useStyles()
    
    return (
        <div className={`${classes.footerIndex} _3904 S3RDod`} >
            <IndexF />
            <IndexS fullScreening={props.fullScreening} setFullScreening={props.setFullScreening} handleFullScreen={props.handleFullScreen} handleExitFullScreen={props.handleExitFullScreen} isSharing={props.isSharing} />
            <IndexT open={props.open} p1Open={props.p1Open} p2Open={props.p2Open} p3Open={props.p3Open} p4Open={props.p4Open} p5Open={props.p5Open} setPopuptrue={props.setPopuptrue} />
        </div>
    )
}

export default FooterIndex