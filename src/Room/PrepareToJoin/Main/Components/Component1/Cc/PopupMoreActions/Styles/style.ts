import { makeStyles } from "@mui/styles"

export const useStyles= makeStyles({
    container: {
        width: "100%", 
        height: "100%",
        backgroundColor: "rgba(32,33,36,0.6)",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    container2: {
        padding: "20px 0",
        width: "calc(100vw - 2rem)",
        maxWidth: 'calc(100vw - 2rem)',
        borderWidth: 0,
        height: '100%',
        opacity: 1,
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 9,
        fontSize: 16

    }, container3: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        boxShadow: '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
        backgroundColor: "#fff",
        boxSizing: 'border-box',
    },
    closePopup: {
        width: "100%",
        height: 61,
        padding: "0 24px 13px 24px",
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        boxSizing: "border-box"
    },
    closePopup1: {
        fontSize: 24,
        color: "#3c4043"
    }, 
    closePopup2: {
        width: 24, 
        height: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: "50%",
        transition: 'all .15s ease-in-out',
        boxSizing: "content-box",
    },
    closePopup21: {
        borderRadius: "50%",
        "&:hover": {
            backgroundColor: "#f2f0f5",
        }
    },
    d: {
        width: '100%',
        height: 64,
        display: 'flex',
        flexDirection: "row",
        position: 'relative',

    }, d1: { 
        display: 'flex',
        flex: "1 0 auto",
        justifyContent: 'center',
        alignItems: 'center',
        padding: "0 16px",
        cursor: "pointer",
        transition: "all .15s ease-in",
        "&:hover": {
            backgroundColor: "#f2f0f5"
        }
    },
        
    containerd: {
        width: '100%',
        height: "100%",
        display: 'flex',
        flexDirection: 'row',
        transform: "none",
        willChange: "transform"
    },
    d11: {

    },
    d12: {
        color: "#5f6368",
        fontWeight: 600,
        fontSize: 14
    },
     containerd1: {
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%", 
        position: 'relative',
        
     },
     containerd1active: {
         position: "relative",
        '&::after': {
            display: "block",
            content: '""',
            position: "absolute",
            zIndex: 10,
            bottom: 0,
            width: '100%',
            borderBottom: "3px solid #2e89ff",
            borderRadius: "10px 10px 0 0"            
        }
    },
})