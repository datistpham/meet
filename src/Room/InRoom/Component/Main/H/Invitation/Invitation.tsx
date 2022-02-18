import { useStyles } from "./style"
import CloseIcon from '@mui/icons-material/Close'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { memo , useContext} from "react"
import { useParams } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { Tooltip } from "@mui/material"
import { MyContext } from "../../../../../../Components/Context/Context"


const Invitation= (props:any)=> {
    const classes= useStyles()
    return (
        <div className={classes.index}>
            <Section1 closeBoxInvite={props.closeBoxInvite} />
            <Container />
        </div>
    )
}
//
const Section1= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.section1}>
            <Section11 />
            <Section12 closeBoxInvite={props.closeBoxInvite} /> 
        </div>
    )
}
const Section11= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.section11}>
            The meeting room is ready
        </div>
    )
}
const Section12= (props: any)=> {
    const classes= useStyles()
    return (
        <div onClick={()=> props.closeBoxInvite()} className={classes.section12}>
            <CloseIcon style={{width: 24, height: 24, color: '#202124'}} />
        </div>
    )
}
//

const Container= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.container}>
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </div>
    )
}
//
const Section2= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.section2}>
            <div className={classes.buttonsection2}>
                <PersonAddAltIcon style={{width: 24, height: 24, color: "#fff", marginRight: 8, fontWeight: 600}} />
                <div style={{fontSize: 14, fontWeight: 600, color: "#fff", cursor: 'pointer '}}>
                    Add other people
                </div>
            </div>
        </div>
    )
}
//
const Section3= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.section3}>
            Or share this meeting room link with people who you want to join meeting
        </div>
    )
}
//
const Section4= (props: any)=> {
    const { roomID }= useParams()
    const classes= useStyles()
    return (
        <div className={classes.section4}>
            <div className={classes.section41}>
                localhost:3000/{roomID}
            </div>
            <Tooltip title="Copy link" placement="top">
                <div className={classes.section42}>
                    <CopyToClipboard text={`localhost:3000/${roomID}`}>
                        <ContentCopyIcon style={{width: 24, height: 24, color: '#202124'}} />
                    </CopyToClipboard>
                </div>
            </Tooltip>
        </div>  
    )
}
//

const Section5= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.section5}>
            <div className={classes.section51}>
                <VerifiedUserIcon style={{width: 26, height: 26, color: '#2e89ff'}} />
            </div>
            <div className={classes.section52}>
                Anyone use link to this meeting have to accepted by you and can join meeting
            </div>
        </div>
    )
}
//
const Section6= (props: any)=> {
    const classes= useStyles()
    const { email }= useContext(MyContext)
    return (
        <div className={classes.section6}>
            Join with {email} 
        </div>
    )
}
//
export default memo(Invitation)
