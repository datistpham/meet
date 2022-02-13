import { CircularProgress } from "@mui/material";

const DelayForPreparing= ()=> {
    return (
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><div style={{fontSize: 24, fontWeight: 600, marginBottom: 10}} >Preparing</div><div style={{textAlign: "center", whiteSpace: "nowrap", marginBottom: 16}}>You will join meeting room soon</div> <CircularProgress /></div>
    )
}

export default DelayForPreparing