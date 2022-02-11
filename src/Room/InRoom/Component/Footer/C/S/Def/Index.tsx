import { useStyles } from "../../../../../Style/main_style"
import IndexCoreB from "../C/Index"

const IndexS= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.indexComponentF}>
            <IndexCoreB />
        </div>
    )
}

export default IndexS