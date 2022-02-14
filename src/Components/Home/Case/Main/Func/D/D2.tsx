import { useStyles } from "../../../Index"

const D2= (props: any)=> {
    const classes= useStyles()
    const measureLength= (e: any)=> {
        props.setValue(e)
        if(e.target.value.length> 0) {
            props.checkValue()
        }
        else {
            props.checkValueEmpty()
        }
    }
    return (
        <div className={classes.c2}>
            <input value={props.code} type="text" placeholder={props.title} className={classes.d2} onChange={(e)=> measureLength(e)} style={{boxSizing: "content-box", padding: "15px 0"}} />
        </div>
    )
}

export default D2