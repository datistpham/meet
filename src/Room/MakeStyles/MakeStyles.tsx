import { makeStyles } from "@mui/styles"

export const useStyles= makeStyles({
    prepareToJoin: {
        width: '100%',
        height: '100%',
        userSelect: 'none'
        
    },
    main: {
        position: 'relative',
        height: 'calc(100% - 60px)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerComponent: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    containerComponent2: {
        height: 540,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    component1: {
        width: "calc(100% - 448px - 24px)",
        height: 540,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 740,
        flexDirection: 'column'
    },
    component1C: {
        margin: "16px 8px 16px 16px",
        width: "calc(100% - 24px)"
    },
    component1Cc: {
        width: '100%',
        paddingTop: '56.25%',
        top: 0,
        left: 0,
        
    },
    component2: {
        width: 448,
        margin: "16px 16px 16px 8px",
        height: 540,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    IndexCheckDevices: {
        width: '100%',
        height: 48,
    },
    cp: {
        height: 32,
        margin: '8px 0 8px 16px',
        borderRadius: 80,
        border: '1px solid #bcbcbc',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: "0 10px",
        width: 'max-content',
        "&:hover:active": {
            backgroundColor: "#f2f0f5"
        }
    },
    cp1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16
    },
    cp2: {
        fontSize: 14,
        fontWeight: 600
    },
    containerC2: {
        width: '100%',
        height: 410,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerC21: {
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: "center", 
        alignItems: 'center',
        flexDirection: 'column'
    },
    containerC22: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        margin: "16px 0 16px 0"
    },
    CcVideoS2C: {
        width: 55, 
        height: 55,
        border: '1px solid #fff',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: "center", 
        alignItems: 'center',
        transition: 'all .15s linear',

        "&:hover": {
            backgroundColor: "#e5e5e57a",
        }
    },
    bx2: {
        padding: "0 24px", height: 48, borderRadius: 80, boxSizing: 'border-box', display: "inline-flex", justifyContent: 'center',alignItems: 'center', boxShadow: '0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 1px 3px 1px rgb(60 64 67 / 15%)', margin: "0 4px 18px 4px", cursor: "pointer",backgroundColor: "#fff",
        "&:hover:active": {
            backgroundColor: "#5ca2ff"
        },
        "&:hover": {
            backgroundColor: "#d1ecff"
        }
    }
})