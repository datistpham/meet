import { useStyles } from "../../Styles/style"

const D11= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.d11}>
            {props.icon}
        </div>
    )
}

export default D11