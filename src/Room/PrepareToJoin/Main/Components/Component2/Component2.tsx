import { useStyles } from "../../../../MakeStyles/MakeStyles"
import ContainerC2 from "./Container/ContainerC2"

const Component2= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.component2}>
            <ContainerC2 />
        </div>
    )
}

export default Component2