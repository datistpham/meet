// import { useState } from "react"
import C1 from "./Components/C1/C1"
import C2 from "./Components/C2/C2"
import C3 from "./Components/C3/C3"
import C4 from "./Components/C4/C4"
import C5 from "./Components/C5/C5"
import { useStyles } from "./style"

const Popup= (props: any)=> {
    const classes= useStyles()
    
    return (
        <div className={`${classes.index} ${props.popup=== false ? classes.qwU8Me : classes.gofsewq } `}>
            {
                props.open.p1=== true && <C1 setPopupFalse={props.setPopupFalse} />

            }
            {
                props.open.p2=== true && <C2 setPopupFalse={props.setPopupFalse}  />

            }
            {
                props.open.p3=== true && <C3 setPopupFalse={props.setPopupFalse}  />

            }
            {
                props.open.p4=== true && <C4 setPopupFalse={props.setPopupFalse}  />

            }
            {
                props.open.p5=== true && <C5 setPopupFalse={props.setPopupFalse}  />

            }
        </div>
    )
}

export default  Popup