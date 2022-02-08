import { useStyles } from "../Styles/style"
import ContainerD from "./ContainerD"

const D= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.d}>
            <ContainerD />
        </div>
    )
}

export default D