import { useStyles } from "../../../Index"

const C2 = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.c2}>
            {props.title}
        </div>
    )
}

export default C2
