import { Tooltip } from "@mui/material"
import { useStyles } from "../../../../../../MakeStyles/MakeStyles"

const C= (props: any)=> {
    const classes= useStyles()
    return (
        <Tooltip title={<div style={{fontSize: 12}}>{props.title}</div>} placement={props.direction} disableInteractive >
            <div onClick={()=> {props.actionF();props.actionF2();props.actionF3()}} className={`_4000 ${classes.CcVideoS2C}` } style={{cursor: "pointer", backgroundColor: props.backgroundColor, borderColor: props.borderColor}} >
                {props.icon}
            </div>
        </Tooltip>
    )
}

export default C