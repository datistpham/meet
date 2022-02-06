import { useStyles } from "../MakeStyles/MakeStyles"
import Header from "./Header/Index"
import Main from "./Main/Main"

const PrepareToJoin= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.prepareToJoin}>
            <Header />
            <Main />
        </div>
    )
}

export default PrepareToJoin