import { Menu, MenuItem, Tooltip } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React from 'react' 
import { Wrapper1 } from "../ShareScreen/ShareScreen"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YoutubeSearchedForOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import styled from "styled-components"
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'

const Wrapper3= styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`
const MoreOptions= (props: any)=> {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }   
    return (
        <div>
        <Tooltip title={<div style={{fontSize: 12}}>More options</div>} placement={"top"} disableInteractive >
            <div onClick={(e)=> handleClick(e)} className={`_4000` } style={{cursor: "pointer", backgroundColor: "#3c4043", width: 40, height: 40, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 6px" }} >
                <MoreVertIcon />
            </div>
        </Tooltip>
      <Menu
        id="basic-menu"
        style={{transform: "translateY(-10%)"}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          <div>
            <MenuItem onClick={()=> {handleClose()}}><Wrapper1><Wrapper3><DashboardOutlinedIcon style={{color: "#5f6368"}}/></Wrapper3><span>Change layout</span></Wrapper1></MenuItem>
            <MenuItem onClick={()=> {handleClose(); props.fullScreening=== false ? props.handleFullScreen() : props.handleExitFullScreen() }}><Wrapper1><Wrapper3>{props.fullScreening=== false ? <FullscreenIcon style={{color: "#5f6368"}}/> : <FullscreenExitOutlinedIcon style={{color: "#5f6368"}} />}</Wrapper3><span>{ props.fullScreening=== false ? "Full screen" : "Exit full screen"}</span></Wrapper1></MenuItem>
            <MenuItem onClick={()=> {handleClose()}}><Wrapper1><Wrapper3><AutoAwesomeOutlinedIcon style={{color: "#5f6368"}}/></Wrapper3><span>Apply effects</span></Wrapper1></MenuItem>
            <MenuItem onClick={()=> {handleClose()}}><Wrapper1><Wrapper3><ClosedCaptionOffOutlinedIcon style={{color: "#5f6368"}}/></Wrapper3><span>Subtitle</span></Wrapper1></MenuItem>
            <div style={{width: '100%', borderTop: '1px solid #d1d1d1'}}></div>
            <MenuItem onClick={()=> {handleClose()}}><Wrapper1><Wrapper3><FeedbackOutlinedIcon style={{color: "#5f6368"}}/></Wrapper3><span>Feedback</span></Wrapper1></MenuItem>
            <MenuItem onClick={()=> {handleClose()}}><Wrapper1><Wrapper3><ReportGmailerrorredOutlinedIcon style={{color: "#5f6368"}}/></Wrapper3><span>Report violations</span></Wrapper1></MenuItem>
            <MenuItem onClick={()=> {handleClose()}}><Wrapper1><Wrapper3><YoutubeSearchedForOutlinedIcon style={{color: "#5f6368"}}/></Wrapper3><span>Troubleshoot and help</span></Wrapper1></MenuItem>
            <MenuItem onClick={()=> {handleClose()}}><Wrapper1><Wrapper3><SettingsOutlinedIcon style={{color: "#5f6368"}}/></Wrapper3><span>Settings</span></Wrapper1></MenuItem>
        </div>
        }
      </Menu>
    </div>
    )
}

export default MoreOptions