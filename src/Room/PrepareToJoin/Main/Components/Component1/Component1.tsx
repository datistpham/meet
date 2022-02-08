import React, {useState} from 'react'
import { useStyles } from "../../../../MakeStyles/MakeStyles"
import C from "./C"
import IndexCheckDevices from "./CheckDevices/IndexCheckDevices"

const Component1= ()=> {
    const classes= useStyles()
    const [state, setState]= useState<{state1: boolean, state2: boolean, state3: boolean}>(()=> ({state1: false, state2: false, state3: false}))
    const [open ,setOpen]= useState<boolean>(()=> false)
    // 
    const handleClickOpen= ()=> {
        setOpen(()=> true)
    }
    const handleClose= ()=> {
        setOpen(()=> false)
    }
    //
    const openState1= ()=> {
        setState(prev=> ({...prev, state1: true, state2: false, state3: false}))
    }
    const openState2= ()=> {
        setState(prev=> ({...prev, state1: false, state2: true, state3: false}))
    }
    const openState3= ()=> {
        setState(prev=> ({...prev, state1: false, state2: false, state3: true}))
    }
    return (
        <div className={`_3200 ${classes.component1}`}>
            <C open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} state1={state.state1} state2={state.state2} state3={state.state3} openState1={openState1} openState2={openState2} openState3={openState3}  />
            <IndexCheckDevices actionF={openState1} actionF2={handleClickOpen} />
        </div>
    )
}

export default React.memo(Component1)