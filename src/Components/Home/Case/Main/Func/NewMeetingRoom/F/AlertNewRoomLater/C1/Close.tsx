import { useStyles } from "../AlertNewRoomLater"
import CloseIcon from '@mui/icons-material/Close'

const Close = (props: any) => {
    const classes= useStyles()
    return (
        <div onClick={()=> {props.openAlertFalse();props.popUpFalseTest()}} className={classes.close}>
            <CloseIcon />
        </div>
    )
}

export default Close
