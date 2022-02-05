import { useStyles } from "../../../Index"

const C1 = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.c1}>
            {props.icon}
        </div>
    )
}

export default C1
