import DiaLog from "@mui/material/Dialog"
import Container from "./Container"

export interface PopupMoreActionsType {
    open: boolean,
    onClose: ()=> void,
    toggleVideo: any,
}

const PopupMoreActions= (props: PopupMoreActionsType)=> {
    const { open, onClose, toggleVideo }= props
    const handleClose= ()=> {
        onClose()
    }
    
    return (
        
        <DiaLog
            fullScreen
            onClose={handleClose} 
            open={open}
            style={{width: '100%', height: '100%'}}
            className="_7300"
        >
            <Container close={handleClose} toggleVideo={toggleVideo} />
        </DiaLog>
    )
}
export default PopupMoreActions