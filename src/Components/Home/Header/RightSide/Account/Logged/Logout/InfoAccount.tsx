import { makeStyles } from "@mui/styles"
import AccountIndex from "./AccountSelf/Index"
import Logout from "./MainLogout/Logout"

export const useStyles= makeStyles({
    infoAccount: {
        width: 354,
        height: 'auto',
        borderRadius: 6,
        border: "1px solid #ccc",
        boxShadow: "0 2px 10px rgb(0 0 0 / 20%)",
        marginLeft: 12,
        boxSizing: "content-box",
        position: 'absolute',
        right: 10,
        top: 62,
        zIndex: 999,
    },
    accountSelf: {
        width: 'calc(100% - 66px)',
        boxSizing: "border-box",
        margin: "20px 33px",
        display: 'block',
        userSelect: 'none'
    },
    containerAvatarBig: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    avatarBig: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        objectFit: 'cover'
    },
    cotainerUserEmail: {
        width: '100%',
    },
    emailName: {
        color :"#5f6368",
        font: "400 14px/19px Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
        letterSpacing: 'normal',
        textAlign: 'center',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    userName: {
        color: "#202124",
        font: "500 16px/22px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
        letterSpacing: '0.29px',
        margin: 0,
        textAlign: 'center',
        textOverflow: 'ellipsis',
        overflow: "hidden",
        fontWeight: 600
    },
    logoutMain: {
        width: '100%',
        borderTop: '1px solid rgba(0,0,0,.2)',
        height: 73,
        padding: '0 17px',
        textAlign: "center",
        boxSizing: 'border-box',
        userSelect: "none"
    
    },
    buttonLogout: {
        padding: '10px 24px',
        borderRadius: 5,
        border: '1px solid rgba(0,0,0,.2)',
        margin: 16,
        color: "#3c4043",
        fontWeight: 600,
        fontSize: 16,
        background: 'none',
        cursor: 'pointer',
        transition: 'all .1s linear',
        '&:hover': {
            background: "#f2f0f5"
        }
    }
})
const InfoAccount = (props: any) => {
    const classes= useStyles()
    return (
        <div className={classes.infoAccount}>
            <AccountIndex />
            <Logout />
        </div>
    )
}

export default InfoAccount
