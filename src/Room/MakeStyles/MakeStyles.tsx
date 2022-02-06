import { makeStyles } from "@mui/styles"

export const useStyles= makeStyles({
    prepareToJoin: {
        width: '100%',
        height: 'auto',
        
    },
    main: {
        position: 'relative',
        top: 60,
        width: 'calc(100% - 60px)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})