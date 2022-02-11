import { useStyles } from "../../../../../Style/main_style"
import { Tooltip } from "@mui/material"

const CCore= (props: any)=> {
    const classes= useStyles()
    return (
        <Tooltip title={<div>{props.title}</div>} placement="top">
            <div className={classes.ccore}>
                {props.icon}
            </div>
        </Tooltip>
    )
}

export default CCore