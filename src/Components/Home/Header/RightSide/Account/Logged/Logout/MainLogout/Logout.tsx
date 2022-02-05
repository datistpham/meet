import { useStyles } from "../InfoAccount"
import ButtonLogout from "./ButtonLogout"

const Logout = () => {
    const classes= useStyles()
    return (
        <div className={classes.logoutMain}>
            <ButtonLogout />
        </div>

    )
}

export default Logout
