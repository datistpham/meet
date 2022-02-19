import { makeStyles } from "@mui/styles"

export const useStyles= makeStyles({
    index: {
        backgroundColor: "#fff",
        borderRadius: 8,
        boxShadow: '0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 2px 6px 2px rgb(60 64 67 / 15%)',
        left: 50,
        top: 50,
        position: "absolute",
        width: 360,
        zIndex: 2,
        boxSizing: 'border-box',
        userSelect: 'none',
    },
     section1: {
        padding:'12px 12px 0 24px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     },
     section11: {
        fontSize: 18,
        color: '#202124',
        margin: '16px 0'

     },
     section12: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: "#f2f0f5"
        }
     },
     container: {
        width: '100%',
        padding: '0px 24px 24px 24px',
        height: 'calc(256px + 24px)'
     },
     section2: {
        width: '100%',
        height: 36
     },
     buttonsection2: {
        height: '100%',
        padding: '0 10px',
        backgroundColor: '#2e89ff',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'max-content',
        whiteSpace: 'nowrap'

     },
     section3: {
        width: '100%',
        marginTop: '8px',
        height: 60,
        color: "#3c4043",
        fontWeight: 600,
        fontSize: 14,
     }, section4: {
        width: '100%',
        paddingLeft: 12,
        marginTop: 8,
        height: 48,
        backgroundColor: '#f1f3f4',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
     },
     section41: {
        color: "#202124",
        fontSize: 14,
        fontWeight: 600,
        width: 'calc(100% - 12px - 48px)',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
     },section42: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: "#b0b4b6"
        }
     },

     section5: {
        width: '100%',
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
     section51: {
        width: 26,
        marginRight: 8,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
     section52: {
        width: 'calc(100% - 34px)',
        color: '#5f6368',
        fontSize: 12,

     },
     section6: {
         width: '100%',
         height: 16,
         marginTop: 8,
         color: "#5f6368",
         fontSize: 12
     }
})