import { useStyles } from "../../Styles/style"
import Case2 from "./Case2"
import { lazy, Suspense } from "react"
import { CircularProgress } from "@mui/material"
const Case1 = lazy(() => (import("./Case1")))
const CCase= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`_2750 ${classes.containerCase}`}>
            <Suspense fallback={<div style={{position: 'absolute', top: "50%", left: "50%", transform: 'translate(-50%, -50%)', zIndex: 999}}><CircularProgress /></div>}>
                <Case1 toggleVideo={props.toggleVideo} />
            </Suspense>
            <Case2 />
        </div>
    )
}

export default CCase