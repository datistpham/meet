import { useStyles } from "../../../../Styles/style"
import A1 from "./A1/A1"
import A2 from "./A2/A2"

const Case2C1= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.case2c1}>
            <A1 />
            <A2 />
        </div>
    )
}

export default Case2C1