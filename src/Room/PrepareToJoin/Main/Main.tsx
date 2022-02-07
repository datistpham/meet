import { useStyles } from "../../MakeStyles/MakeStyles"
import IndexComponent from "./Components/IndexComponent"

const Main = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.main}>
            <IndexComponent />
        </div>
    )
}

export default Main
