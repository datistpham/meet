import C from "../../../../../../PrepareToJoin/Main/Components/Component1/Cc/CcVideoS2/C"
import { useStyles } from "../../../../../Style/main_style"

const CoreB= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`${classes.coreB} ${classes.indexFSame}`}>
            <C backgroundColor={props.backgroundColor} borderColor={props.borderColor} icon={props.icon} title={props.title} actionF={props.actionF} actionF2={props.actionF2} actionF3={props.actionF3} direction="top" width={40} height={40} />
        </div>
    )
}

export default CoreB