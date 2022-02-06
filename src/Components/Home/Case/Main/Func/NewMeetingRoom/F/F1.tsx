import { useStyles } from "../../../../Index"

const F1= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.f1}>
            {props.icon}
        </div>
    )
}

export default F1