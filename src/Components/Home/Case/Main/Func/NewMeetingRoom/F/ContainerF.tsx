import { useStyles } from "../../../../Index"
import F1 from "./F1"
import F2 from "./F2"

const ContainerF= (props: any)=> {
    const classes= useStyles()
    return (
        <div onClick={()=> {props.createNewRoomLater();props.openAlertTrue()}} className={classes.containerF}>
            <F1 icon={props.icon} />
            <F2 title={props.title} />
        </div>
    )
}

export default ContainerF