import { useStyles } from "../InfoAccount"
import { MyContext } from "../../../../../../../Context/Context"
import { useContext } from "react"

const UserName = () => {
    const classes= useStyles()
    const { username }= useContext(MyContext)

    return (
        <div className={classes.cotainerUserEmail}>
            <div className={classes.userName}>
               {username}
            </div> 
        </div>     
    )
}

export default UserName
