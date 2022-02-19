import { useStyles } from "../../../../../Style/main_style"
import CM from "../C/CM"

const IndexT= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.indexComponentF} >
            <CM messageRoom={props.messageRoom} setMessageRoom={props.setMessageRoom} open={props.open} p1Open={props.p1Open} p2Open={props.p2Open} p3Open={props.p3Open} p4Open={props.p4Open} p5Open={props.p5Open} setPopuptrue={props.setPopuptrue} />
        </div>
    )
}

export default IndexT