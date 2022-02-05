import { useStyles } from "../Index"
import IndexRootFunc from "./Func/IndexRootFunc"
import Title1 from "./Title1"
import Title2 from "./Title2"

const Main= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.main}>
            <Title1 />
            <Title2 />
            <IndexRootFunc />
        </div>
    )
}

export default Main