import { useStyles } from "../../Styles/style"
import D11 from "./D11"
import D12 from "./D12"

const ContainerD1= (props: any)=> {
    const classes= useStyles()
    return (
        
        <div className={classes.containerd1}>
            <D11 icon={props.icon} />
            <D12 title={props.title} />
        </div>
    )
}

export default ContainerD1