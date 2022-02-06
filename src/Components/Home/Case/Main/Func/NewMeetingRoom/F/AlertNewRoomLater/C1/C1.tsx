import { useStyles } from "../AlertNewRoomLater"
import C1A from "./C1A"
import Close from "./Close"

const C1 = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.c1}>
            <C1A />
            <Close popUpFalseTest={props.popUpFalseTest} openAlertFalse={props.openAlertFalse} />
        </div>
    )
}

export default C1
