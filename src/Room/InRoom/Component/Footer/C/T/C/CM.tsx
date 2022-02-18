import { useStyles } from "../../../../../Style/main_style"
import CCore from "./CCore"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import CCoreNumber from "./CCoreNumber"

const CM= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`${classes.cm}`}>
            <div className={classes.cm2}>
                <CCore pOpen={props.p1Open} setPopuptrue={props.setPopuptrue} icon={<InfoOutlinedIcon />} title="Detail about meeting" />
                <CCoreNumber pOpen={props.p2Open} setPopuptrue={props.setPopuptrue} icon={<PeopleAltOutlinedIcon />} title="Show all people" />
                <CCore pOpen={props.p3Open} setPopuptrue={props.setPopuptrue} icon={<ChatOutlinedIcon />} title="Chat with everyone" />
                <CCore pOpen={props.p4Open} setPopuptrue={props.setPopuptrue} icon={<ChangeHistoryIcon />} title="Activities" />
                <CCore pOpen={props.p5Open} setPopuptrue={props.setPopuptrue} icon={<SecurityOutlinedIcon />} title="Dashboard's boss" />

            </div>
        </div>
    )
}

export default CM