import { makeStyles } from "@mui/styles"

export const useStyles= makeStyles({
    container: {
        width: "100%", 
        height: "100%",
        backgroundColor: "rgba(32,33,36,0.6)",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        userSelect: "none"
    },
    container2: {
        padding: "20px 0",
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
            width: "100%",
            borderBottom: "3px solid #2e89ff",
            borderRadius: "10px 10px 0 0",
        },
        
    },
    case: {
        width: "100%",
        boxSizing: "border-box",
        padding: "16px 24px 24px 24px",
        height: "calc(100% - 48px - 13px - 1px - 64px )",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    containerCase: {
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    },
    case1: {
        width: "calc(100% - 344px)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: '100%',
        justifyContent: "center"
    },
    case2: {
        width: 344,
        boxSizing: 'border-box',
        paddingLeft: 24,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    },
    videoComponent: {
        width: "100%",
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 10
    }, videoM: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        transform: "scaleX(-1)",
        objectFit: 'cover'
    },
    case2c1: {
        width: "100%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    case2c2: {

    },
    case2c3: {
        
    },
    co: {
        transition: "all .15s ease-in-out",
        width: '100%', 
        height: 52,
        margin: "8px 0", 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "#f1f3f4", 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        cursor: "pointer",
        position: "relative",

        // "&::after": {
        //     width: "100%",
        //     height: "100%",
        //     content : "''",
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     backgroundColor: "#dcdedf",
        //     transform: "scaleX(0)",
        //     transition: "transform 150ms ease-in-out",
        //     zIndex: -1

        // },
        "&:active:hover": {
            backgroundColor: "#dcdedf",
        },
        "&:active": {
            backgroundColor: "#dcdedf",
        }
    }
    , cos41: {
        transition: "all .1s ease-in-out",
        "&:hover": {
            backgroundColor: "#f2f0f5"
        }
    }
})