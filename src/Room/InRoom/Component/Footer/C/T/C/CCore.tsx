import { useStyles } from "../../../../../Style/main_style"
import { Tooltip } from "@mui/material"
import { memo } from "react"

const CCore= (props: any)=> {
    const classes= useStyles()
    
    return (
        <Tooltip title={<div>{props.title}</div>} placement="top">
            <div onClick={()=> {props.setPopuptrue();props.pOpen()}} className={classes.ccore}>
                {props.icon}
            </div>
        </Tooltip>
    )
}

export default memo(CCore)