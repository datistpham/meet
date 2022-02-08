import { useStyles } from "../../Styles/style"
import ContainerD1 from "./ContainerD1"

const D1= (props: any)=> {
    const classes= useStyles()
    
    return (
        <div className={`${classes.d1}`} >
            <ContainerD1 icon={props.icon} title={props.title} />
        </div>
    )
}

export default D1