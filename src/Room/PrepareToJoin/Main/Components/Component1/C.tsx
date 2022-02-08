import React from 'react'
import { useStyles } from "../../../../MakeStyles/MakeStyles"
import Cc from "./Cc/Cc"
import CcVideoVip from "./Cc/CcVideo"

const C= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.component1C} style={{position: 'relative'}}>
            <Cc />
            <CcVideoVip handleClickOpen={props.handleClickOpen} open={props.open} handleClose={props.handleClose} state1={props.state1} state2={props.state2} state3={props.state3} openState1={props.openState1} openState2={props.openState2} openState3={props.openState3} />
        </div>
    )
}

export default React.memo(C)