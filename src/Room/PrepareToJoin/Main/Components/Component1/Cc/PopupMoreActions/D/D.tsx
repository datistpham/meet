import { useStyles } from "../Styles/style"
import ContainerD from "./ContainerD"

const D= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.d}>
            <ContainerD state1={props.state1} state2={props.state2} state3={props.state3} openState1={props.openState1} openState2={props.openState2} openState3={props.openState3} />
        </div>
    )
}

export default D