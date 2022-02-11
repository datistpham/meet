import { useStyles } from "../../../../../Style/main_style"
import CCore from "./CCore"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

const CM= ()=> {
    const classes= useStyles()
    return (
        <div className={`${classes.cm}`}>
            <div className={classes.cm2}>
                <CCore icon={<InfoOutlinedIcon />} title="Detail about meeting" />
                <CCore icon={<PeopleAltOutlinedIcon />} title="Show all people" />
                <CCore icon={<ChatOutlinedIcon />} title="Chat with everyone" />
                <CCore icon={<ChangeHistoryIcon />} title="Activities" />
                <CCore icon={<SecurityOutlinedIcon />} title="Dashboard's boss" />

            </div>
        </div>
    )
}

export default CM