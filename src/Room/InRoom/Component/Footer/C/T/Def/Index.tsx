import { useStyles } from "../../../../../Style/main_style"
import CM from "../C/CM"

const IndexT= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.indexComponentF} >
            <CM />
        </div>
    )
}

export default IndexT