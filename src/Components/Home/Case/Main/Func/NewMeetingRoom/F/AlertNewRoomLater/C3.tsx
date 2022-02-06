import { useStyles } from "./AlertNewRoomLater"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const C3 = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.c3}>
            <C31 newRoom={props.newRoom} />
            <C32 newRoom={props.newRoom} al={props.al} />
        </div>
    )
}
const C31= (props: any)=> {
    return (
        <div className="_8210" style={{width: 'calc(100% - 48px)', height: 48, textAlign: "left", verticalAlign: "middle", display: 'flex', alignItems: 'center'}}>
            <div style={{overflow: "hidden", textOverflow: 'ellipsis',width: '100%'}}>
                {props.newRoom}
            </div>
        </div>
    )
}
const C32= (props: any)=> {
    const classes= useStyles()
    return (
        <CopyToClipboard text={props.newRoom}>
            <div onClick={()=> props.al()} className={`${classes.c32} _2324`} style={{width: 48, height: 48, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ContentCopyIcon />
            </div>
        </CopyToClipboard>
    )
}
export default C3
