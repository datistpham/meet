import { useParams } from "react-router-dom"
import { useStyles } from "../../../../Style/main_style"


const Link= ()=> {
    const { roomID }= useParams()
    const classes= useStyles()
    return (
        <div className={`${classes.indexFLink} ${classes.indexFSame}`}>
            {roomID}
        </div>
    )
}

export default Link