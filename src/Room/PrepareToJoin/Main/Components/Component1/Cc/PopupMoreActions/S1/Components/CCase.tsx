import { useStyles } from "../../Styles/style"
import Case2 from "./Case2"
// import { lazy, Suspense } from "react"
// import { CircularProgress } from "@mui/material"
import Case1 from "./Case1"
const CCase= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`_2750 ${classes.containerCase}`}>
            <Case1 />
            <Case2 state1={props.state1} state2={props.state2} state3={props.state3} openState1={props.openState1} openState2={props.openState2} openState3={props.openState3} />
        </div>
    )
}

export default CCase