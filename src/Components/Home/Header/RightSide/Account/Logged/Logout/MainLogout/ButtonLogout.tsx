import { LogoutExecute } from "../../../NoLogin/HandleLogin"
import { useStyles } from "../InfoAccount"
import { MyContext } from "../../../../../../../Context/Context"
import { useContext } from "react"

const ButtonLogout = () => {
    const classes= useStyles()
    const { refreshInfo }= useContext(MyContext)
    return (
        <button onClick={()=> {LogoutExecute();refreshInfo()}} className={classes.buttonLogout}>
            Log out
        </button>     
    )
}

export default ButtonLogout
