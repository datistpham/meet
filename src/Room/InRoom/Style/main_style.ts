import { makeStyles } from "@mui/styles"

export const useStyles= makeStyles({
    indexRoot: {
        width: '100%',
        height: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column',
        backgroundColor: "#202124",
        color: "#fff"
    },
    footerIndex: {
        width: '100%',
        height: 80,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        userSelect: 'none'
    },
    mainIndex: {
        width: '100%',
        height: 'calc(100% - 80px)',
        position: "relative",
        boxSizing: "border-box",
        left: 0,
        padding: 16
    },
    indexComponentF: {
        display: 'flex',
        width: "calc(100% / 3)",
        height: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft: 12
    },
    indexF: {   

    },
    indexFTime: {
        margin: '0 12px',
        

    },
    indexFLink: {
        height: '100%',
        margin: "0 12px"
    },indexFSame: {
        fontWeight: 600,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',

    },
    indexS: {

    },
    indexT: {

    },
    indexCoreB: {
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    coreB: {
        width: 40,
        height: 40,
        boxSizing: 'border-box',
        margin: "0 6px"
    },
    cm: {
        width: '100%',
        height: 48,
        marginRight: 18,
        display: 'flex',
        flexDirection: 'row',

    },cm2: {
        justifySelf: 'flex-end',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 'auto'
    },
    ccore: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: '50%',
        transition: 'all .15s ease-in-out',
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            cursor: "pointer"
        }
    }
    
})