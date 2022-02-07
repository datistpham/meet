import C from "./CcVideoS2/C"
import MoreVertIcon from '@mui/icons-material/MoreVert'

const CcVideoS1= (props: any)=> {
    return (
        <div className="_1800" style={{position: 'absolute', top: 0, left: 0, backgroundImage: "-webkit-linear-gradient(top,rgba(0,0,0,0.7) 0,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0) 100%)", width: '100%', height: 80, zIndex: 3}} >
            <div style={{padding: '0 12px', width: 'max-content', position: 'absolute', right: 0, top: '50%', transform: 'translate(0%, -50%)'}}>
                <C icon={<MoreVertIcon />} title="More actions" direction="bottom" />
            </div>
        </div>
    )
}

export default CcVideoS1