import { useStyles } from "./AlertNewRoomLater"
import C2 from "./C2"
import C3 from "./C3"

const ContainerC2C3 = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.containerC2C3}>
            <C2 />
            <C3 al={props.al} newRoom={props.newRoom} />
        </div>
    )
}

export default ContainerC2C3
