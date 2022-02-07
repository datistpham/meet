import Component1 from "./Component1/Component1"
import Component2 from "./Component2/Component2"
import { useStyles } from "../../../MakeStyles/MakeStyles"

const IndexComponent2= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`_1350 ${classes.containerComponent}`}>
            <Component1 />
            <Component2 />
        </div>
    )
}

export default IndexComponent2