import { useStyles } from "../../Styles/style"

const D12= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.d12}>
            {props.title} 
        </div>
    )
}

export default D12