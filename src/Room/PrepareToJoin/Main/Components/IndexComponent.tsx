import { useStyles } from "../../../MakeStyles/MakeStyles"
import IndexComponent2 from "./IndexComponent2"

const IndexComponent= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`_1600 ${classes.containerComponent2}`}>
            <IndexComponent2 />
        </div>
    )
}

export default IndexComponent