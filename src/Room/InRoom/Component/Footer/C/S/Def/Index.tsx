import { useStyles } from "../../../../../Style/main_style"
import IndexCoreB from "../C/Index"

const IndexS= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.indexComponentF}>
            <IndexCoreB fullScreening={props.fullScreening} setFullScreening={props.setFullScreening} handleFullScreen={props.handleFullScreen} handleExitFullScreen={props.handleExitFullScreen} isSharing={props.isSharing} />
        </div>
    )
}

export default IndexS