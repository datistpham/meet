import { useStyles } from "../Styles/style"
import CCase from "./Components/CCase"

const Case= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.case}>
            <CCase />
        </div>
    )
}

export default Case