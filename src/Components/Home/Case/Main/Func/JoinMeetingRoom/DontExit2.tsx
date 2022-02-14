import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const DontExit2= (props: any)=> {
    return (
        <div style={{position: 'absolute', top: "100%", transform: 'translate(0, -120%)', right: 0, width: 'max-content', marginTop: -20}}>
            <Alert
            
            action={<IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
                props.setOpen(false);
            }}
            >
            <CloseIcon fontSize="inherit" />
            </IconButton>} severity="error">
                <AlertTitle style={{textAlign: 'left'}}>
                    Error
                </AlertTitle>
                This meeting room doesn't exist . Please try again <strong>Check it out !</strong>
            </Alert>
        </div>
    )
}

export default DontExit2