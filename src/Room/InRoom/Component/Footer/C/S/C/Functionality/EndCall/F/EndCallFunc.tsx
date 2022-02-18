import { Tooltip } from "@mui/material"
import CallEndIcon from '@mui/icons-material/CallEnd';
import { useContext } from "react";
import { ContextRoom } from "../../../../../../../../../Index";

const EndCallFunc= ()=> {
    const { leaveRoom }= useContext(ContextRoom)
    return (
        <Tooltip title={<div style={{fontSize: 12}}>End call</div>} placement={"top"} disableInteractive >
            <div onClick={()=> leaveRoom()} className={`_4000` } style={{cursor: "pointer", backgroundColor: "#ea4335", width: 40, height: 40, borderRadius: 80, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 6px", padding: '0 8px', boxSizing: "content-box" }} >
                <CallEndIcon style={{color: "#5f6368"}} />
            </div>
        </Tooltip>
    )
}

export default EndCallFunc