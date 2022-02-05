import { makeStyles } from '@mui/styles'
import Main from './Main/Main'

export const useStyles= makeStyles({
    mainIndex: {
        width: '100%',
        position: 'relative',
        top: 60,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 'calc(100% - 60px)',
        userSelect: 'none'
    },
    main: {
        width: '50%',
        boxSizing: "border-box",
        padding: "16px 48px"
    },
    title1: {
        fontSize: '2.75rem',
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: "3.25rem",
        paddingBottom: "0.5em",
        height: 178,
        boxSizing: 'border-box'
    },
    title2: {
        fontSize: "1.35rem",
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: '1.5rem',
        color: "#5f6368",
        maxWidth: '30rem',
        paddingBottom: "3em"
    },
    buttonNewMeetingRoom: {
        width: 160,
        height: 48,
        borderRadius: 6,
        backgroundColor: '#1a73e8',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        cursor: 'pointer'
    },
    buttonJoinMeetingRoom: {
        width: 264,
        height: 48,
        borderRadius: 6,
        border: '1px solid #9a9fa3',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "backgroundColor .15s linear",
        "&:hover": {
            backgroundColor: "#f2f0f5"
        }
    },
    c: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    c1: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    c2: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'clip',
        fontWeight: 600
    },
    p: {
        display: 'flex',
        flexDirection: 'row',
        gap: 25
    },
    d2: {
        fontSize: 16,
        border: "none",
        outline: "none",
        backgroundColor: "inherit",
        cursor: 'pointer',
        fontWeight: 600,
    },
    e: {
        fontSize: 16,
        fontWeight: 600,
        color: "#333"
    }
})
const IndexMainSection = () => {
    const classes= useStyles()
    return (
        <div className={classes.mainIndex}>
            <Main />
        </div>
    )
}

export default IndexMainSection
