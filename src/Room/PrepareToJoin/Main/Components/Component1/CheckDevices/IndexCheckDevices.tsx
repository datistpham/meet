import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import Cp from "./Cp"
const IndexCheckDevices= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.IndexCheckDevices} >
            <Cp actionF={props.actionF} />
        </div>
    )
}

export default IndexCheckDevices