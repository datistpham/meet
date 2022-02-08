import DiaLog from "@mui/material/Dialog"
import Container from "./Container"

export interface PopupMoreActionsType {
    open: boolean,
    onClose: ()=> void,
    state1: boolean, 
    state2: boolean,
    state3: boolean,
    openState1: any,
    openState2: any, 
    openState3: any,
}

const PopupMoreActions= (props: PopupMoreActionsType)=> {
    const { open, onClose, state1, state2, state3, openState1, openState2, openState3 }= props
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
            <Container close={handleClose} state1={state1} state2={state2} state3={state3} openState1={openState1} openState2={openState2} openState3={openState3} />
        </DiaLog>
    )
}
export default PopupMoreActions