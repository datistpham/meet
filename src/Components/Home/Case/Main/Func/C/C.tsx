import { useStyles } from "../../../Index"
import C1 from "./C1"
import C2 from "./C2"

const C = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.c} style={props.style}>
            <C1 icon={props.icon} />
            <C2 title={props.title} />
        </div>
    )
}

export default C
