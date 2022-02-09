import { useStyles } from "../../Styles/style"
import Case2C1 from "./Case2C/Case2C1/Case2C1"
import Case2C2 from "./Case2C/Case2C2/Case2C2"
import Case2C3 from "./Case2C/Case2C3/Case2C3"

const Case2 = (props: any) => {
    const classes = useStyles()
    return (
        <div className={`_9340 ${classes.case2}`}>
            {
                props.state1=== true &&
                <Case2C1 />
            }
            {
                props.state2=== true &&
                <Case2C2 />
            }
            {
                props.state3=== true &&
                <Case2C3 />
            }
        </div>
    )
}

export default Case2