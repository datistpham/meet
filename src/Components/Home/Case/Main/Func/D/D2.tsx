import { useStyles } from "../../../Index"

const D2= (props: any)=> {
    const classes= useStyles()
    const measureLength= (e: any)=> {
        if(e.target.value.length> 0) {
            props.checkValue()
        }
        else {
            props.checkValueEmpty()
        }
    }
    return (
        <div className={classes.c2}>
            <input type="text" placeholder={props.title} className={classes.d2} onChange={(e)=> measureLength(e)} />
        </div>
    )
}

export default D2