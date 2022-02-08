import { useStyles } from "../Styles/style"
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'
import D1 from "./D1/D1"

const ContainerD= (props: any)=> {
    const classes= useStyles()
    
    return (
        <div className={classes.containerd}>
           <D1 state={props.state1} openState={props.openState1} icon={<SettingsSuggestOutlinedIcon style={{color: "#5f6368"}}/> } title="Audio and Video" /> 
           <D1 state={props.state2} openState={props.openState2} icon={<AutoAwesomeIcon style={{color: "#5f6368"}} />} title="Effects" /> 
           <D1 state={props.state3} openState={props.openState3} icon={<InventoryOutlinedIcon style={{color: "#5f6368"}} />} title="Preview" /> 
        </div>
    )
}

export default ContainerD