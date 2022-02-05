import { useStyles } from "../InfoAccount"
import { MyContext } from "../../../../../../../Context/Context"
import { useContext } from "react"

const EmailName = () => {
    const classes= useStyles()
    const { email }= useContext(MyContext)
    return (
        <div className={classes.cotainerUserEmail}>
            <div className={classes.emailName}>
                {email}
            </div>
        </div>     
    )
}

export default EmailName
