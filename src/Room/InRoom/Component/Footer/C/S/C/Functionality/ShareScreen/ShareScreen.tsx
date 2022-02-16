import React from "react"
// import CoreB from "../../CoreB"
import { useStyles } from "../../../../../../../../MakeStyles/MakeStyles"
import styled from "styled-components"
import IosShareIcon from '@mui/icons-material/IosShare'
import { Menu, MenuItem, Tooltip } from '@mui/material'
import { Icon1, Icon2, Icon3 } from "./Icon/Icon1"
import { useStore } from "../../../../../../../../../zustand/store"

const Wrapper1= styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    color: #5f6368
`
const Wrapper2= styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`

const ShareScreen = (props: any) => {
    const classes= useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }    
  const isSharing= useStore(state=> state.sharingScreenTrue)



  return (
    <div>
        <Tooltip title={<div style={{fontSize: 12}}>Share screen</div>} placement={props.direction} disableInteractive >
            <div onClick={(e)=> handleClick(e)} className={`_4000 ${classes.CcVideoS2C}` } style={{cursor: "pointer", backgroundColor: "#3c4043", width: 40, height: 40}} >
                <IosShareIcon  />
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
        <div style={{color: "#202124", padding: "6px 16px", fontWeight: 600}}>Present</div>
        <MenuItem onClick={()=> {handleClose();props.isSharing();isSharing()}}><Wrapper1><div style={{display: 'inline-flex', justifyContent: 'center', alignItems: "center"}}><Icon1 /></div><Wrapper2><span>Full your screen</span></Wrapper2></Wrapper1></MenuItem>
        <MenuItem onClick={()=> {handleClose();props.isSharing();isSharing()}}><Wrapper1><div><Icon2 /></div><span>A tab window</span></Wrapper1></MenuItem>
        <MenuItem onClick={()=> {handleClose();props.isSharing();isSharing()}}><Wrapper1><div><Icon3 /></div><div><span>A tag</span><Wrapper1><span style={{fontSize: 12}}>Most suitable for gif or video</span></Wrapper1></div></Wrapper1></MenuItem>
      </Menu>
    </div>
  )
}

export default React.memo(ShareScreen)