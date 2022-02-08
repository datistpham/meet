import ClosePopup from "./C/ClosePopup"
import D from "./D/D"
import { useStyles } from "./Styles/style"

const Container= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.container}>
           <div className={classes.container2}>
                <div className={classes.container3}>
                    <ClosePopup close={props.close} />
                    <D />
                </div>
            </div> 
        </div>
    )
}

export default Container