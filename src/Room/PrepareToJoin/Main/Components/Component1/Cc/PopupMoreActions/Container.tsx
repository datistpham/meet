import ClosePopup from "./C/ClosePopup"
import { useStyles } from "./Styles/style"

const Container= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.container}>
           <div className={classes.container2}>
                <div className={classes.container3}>
                    <ClosePopup close={props.close} />
                </div>
            </div> 
        </div>
    )
}

export default Container