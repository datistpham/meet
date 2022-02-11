import { useStyles } from "../../../../../Style/main_style"
import Link from "../Link"
import Separated from "../Separated"
import Time from "../Time"

const IndexF= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`${classes.indexComponentF}`}>
            <Time />
            <Separated />
            <Link />
        </div>
    )
}

export default IndexF