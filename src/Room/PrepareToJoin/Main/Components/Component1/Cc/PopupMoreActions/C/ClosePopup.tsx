import { useStyles } from "../Styles/style"
import CloseIcon from '@mui/icons-material/Close'

const ClosePopup= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.closePopup}>
            <ClosePopupTitle />
            <ClosePopupIcon close={props.close} />
        </div>
    )
}
const ClosePopupTitle= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.closePopup1}>
            Prepare
        </div>
    )
}
const ClosePopupIcon= (props: any)=> {
    const classes= useStyles()
    return (
        <div onClick={()=> props.close()} role="button" className={classes.closePopup2}>
            <CloseIcon className={classes.closePopup21} style={{padding: 12}} />
        </div>
    )
}

export default ClosePopup