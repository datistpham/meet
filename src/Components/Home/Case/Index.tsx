import { makeStyles } from '@mui/styles'
import Main from './Main/Main'
import ContainerCarousel from './Main/z-Carousel/ContainerCarousel'

export const useStyles= makeStyles({
    mainIndex: {
        width: '100%',
        position: 'static',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 'calc(100% - 60px)',
        userSelect: 'none',

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
        cursor: 'pointer',
        position: 'relative'
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
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    e: {
        fontSize: 16,
        fontWeight: 600,
        color: "#333"
    },
    f: {
        width: 338,
        boxSizing: 'border-box',
        padding: "8px 0",
        borderRadius: 4,
        boxShadow: "0 2px 10px rgb(0 0 0 / 20%)",
        position: 'absolute',
        backgroundColor: "#fff",
        zIndex: 8,
        left: 0,
        top: 0,
        marginTop: -5
    },
    containerF: {
        padding: "0 16px",
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        transition: 'all .1s linear',   
        "&:hover": {
            backgroundColor: "#f2f0f5"
        }
    },
    f1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 32
    },
    f2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 600,
        whiteSpace: 'nowrap'
    }
})
const IndexMainSection = () => {
    const classes= useStyles()
    return (
        <div className={`_wa0eujds S3RDod ${classes.mainIndex}`}>
            <Main />
            <ContainerCarousel />
        </div>
    )
}

export default IndexMainSection
