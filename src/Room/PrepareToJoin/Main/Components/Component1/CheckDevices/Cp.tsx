import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import Cp1 from "./Cp1"
import Cp2 from "./Cp2"

const Cp=(props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.cp}>
            <Cp1 />
            <Cp2 />
        </div>
    )
}

export default Cp