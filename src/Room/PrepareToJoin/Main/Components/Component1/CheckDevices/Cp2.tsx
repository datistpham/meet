import { useStyles } from "../../../../../MakeStyles/MakeStyles"

const Cp2=(props: any)=> {
    const classes= useStyles()
    return (
        <div onEnded={()=> console.log(1111)} className={classes.cp2}>
            Check your your audio and video 
        </div>
    )
}

export default Cp2