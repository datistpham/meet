import { useStyles } from "../../../Index"
import C from "../C/C"
import VideoCallIcon from '@mui/icons-material/VideoCall'

const ButtonNewMeetingRoom = () => {
    const classes= useStyles()
    return (
        <div className={classes.buttonNewMeetingRoom}>
            <C icon={<VideoCallIcon />} title="New room" style={{color: "#fff"}} />
        </div>
    )
}

export default ButtonNewMeetingRoom
