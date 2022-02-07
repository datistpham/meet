import React from 'react'
import { useStyles } from "../../../../MakeStyles/MakeStyles"
import C from "./C"
import IndexCheckDevices from "./CheckDevices/IndexCheckDevices"

const Component1= ()=> {
    const classes= useStyles()
    return (
        <div className={`_3200 ${classes.component1}`}>
            <C />
            <IndexCheckDevices />
        </div>
    )
}

export default React.memo(Component1)