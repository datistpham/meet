import React from 'react'
import { useStyles } from "../../../../MakeStyles/MakeStyles"
import Cc from "./Cc/Cc"
import CcVideoVip from "./Cc/CcVideo"

const C= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.component1C} style={{position: 'relative'}}>
            <Cc />
            <CcVideoVip />
        </div>
    )
}

export default React.memo(C)