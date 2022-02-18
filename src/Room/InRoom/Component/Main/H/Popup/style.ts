import { makeStyles } from "@mui/styles"

export const useStyles= makeStyles({
    index: {
        width: 360,
        backgroundColor: "#fff",
        transform: "translateX(0)",
        transition: 'transform .2s cubic-bezier(0.4,0,0.2,1)',
        willChange: 'transform',
        position: 'absolute',
        borderRadius: 8,
        top: 16,
        right: 16,
        height: "calc(100% - 16px)",
        zIndex: 20,
    },
    qwU8Me: {
        transform: 'translateX(calc(360px + 16px))'
    },
    gofsewq: {
        transform: "translateX(0)"
    }
})