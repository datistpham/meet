import { useStyles } from "./AlertNewRoomLater"
import C1 from "./C1/C1"
import ContainerC2C3 from "./ContainerC2C3"

const C = (props: any) => {
    const classes= useStyles()
    
    return (
        <div className={classes.c}>
            <C1 popUpFalseTest={props.popUpFalseTest} openAlertFalse={props.openAlertFalse} />
            <ContainerC2C3 al={props.al} newRoom={props.newRoom} />
        </div>
    )
}

export default C
