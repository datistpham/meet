import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import Cp from "./Cp"
const IndexCheckDevices= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.IndexCheckDevices} >
            <Cp actionF={props.actionF} actionF2={props.actionF2} />
        </div>
    )
}

export default IndexCheckDevices