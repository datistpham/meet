import { useStyles } from "../Styles/style"
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'

import D1 from "./D1/D1"

const ContainerD= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.containerd}>
           <D1 icon={<SettingsSuggestOutlinedIcon style={{color: "#5f6368"}}/> } title="Audio and Video" /> 
           <D1 icon={<AutoAwesomeIcon style={{color: "#5f6368"}} />} title="Effects" /> 
           <D1 icon={<InventoryOutlinedIcon style={{color: "#5f6368"}} />} title="Preview" /> 
        </div>
    )
}

export default ContainerD