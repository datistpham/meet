import PresentToAllIcon from '@mui/icons-material/PresentToAll'
import { useStyles } from '../../../../../../../MakeStyles/MakeStyles'

const X1= (props: any)=> {
    return (
        <div style={{width: '100%', height: 64, display: 'flex', flexDirection: "row", justifyContent: 'center',alignItems: 'flex-start',}}>
            <BX1 title="Join now" />
            <BX2 title="Present" icon={<PresentToAllIcon style={{color: "#1a73eb"}} />} />
        </div>
    )
}
const BX1= (props: any)=> {
    return (
        <div className="_03w321" role="button" style={{padding: "0 24px", height: 48, borderRadius: 80, boxSizing: 'border-box', display: "inline-flex", justifyContent: 'center',alignItems: 'center', backgroundColor: "#1a73e8", boxShadow: '0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 1px 3px 1px rgb(60 64 67 / 15%)', margin: "0 4px 18px 4px", cursor: "pointer"}}>
            <div className="_94iw4e" style={{width: "max-content", height: 20, color: "#fff", fontWeight: 600, fontSize: 14}}>{props.title}</div>
        </div>
    )
}
const BX2= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`_03w321 ${classes.bx2}`} role="button" style={{}}>
            <div className="_32i3wea" style={{marginRight: 12, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {props.icon}
            </div>
            <div className="_94iw4e" style={{width: "max-content", height: 20, color: "#1a73eb", fontWeight: 600, fontSize: 14}}>{props.title}</div>
        </div>
    )
}

export default X1