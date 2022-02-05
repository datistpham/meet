import { useStyles } from "../../../Index"
const E= (props: any)=> {
    const classes= useStyles()
    return (
        <button disabled={props.disable} className={classes.e} style={{color: props.color, border: "none", outline: "none", background: 'none'}}>
            {props.title}
        </button>
    )
}

export default E