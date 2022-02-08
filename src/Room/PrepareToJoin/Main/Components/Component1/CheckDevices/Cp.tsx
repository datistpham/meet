import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import Cp1 from "./Cp1"
import Cp2 from "./Cp2"

const Cp=(props: any)=> {
    const classes= useStyles()
    return (
        <div role="button" onClick={()=> props.actionF()} className={classes.cp} style={{cursor: "pointer"}}>
            <Cp1 />
            <Cp2 />
        </div>
    )
}

export default Cp