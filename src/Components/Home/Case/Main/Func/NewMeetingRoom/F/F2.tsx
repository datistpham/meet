import { useStyles } from "../../../../Index"

const F2= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.f2}>
            {props.title}
        </div>
    )
}

export default F2