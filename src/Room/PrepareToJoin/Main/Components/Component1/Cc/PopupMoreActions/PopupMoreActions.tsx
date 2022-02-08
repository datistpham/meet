import DiaLog from "@mui/material/Dialog"
import Container from "./Container"
export interface PopupMoreActionsType {
    open: boolean,
    onClose: ()=> void
}

const PopupMoreActions= (props: PopupMoreActionsType)=> {
    const { open, onClose }= props
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
            <Container close={handleClose} />
        </DiaLog>
    )
}
export default PopupMoreActions