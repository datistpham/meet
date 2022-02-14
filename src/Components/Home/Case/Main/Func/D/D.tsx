import { useStyles } from "../../../Index"
import C1 from "../C/C1"
import D2 from "./D2"

const D =(props: any) => {
    const classes= useStyles()
    
    return (
        <div className={classes.c} style={props.style}>
            <C1 icon={props.icon} />
            <D2 code={props.code} setValue={props.setValue} checkValue={props.checkValue} checkValueEmpty={props.checkValueEmpty} title={props.title} />
        </div>
    )
}

export default D
