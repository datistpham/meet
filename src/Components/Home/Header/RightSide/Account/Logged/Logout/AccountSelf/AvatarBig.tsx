import { useStyles } from "../InfoAccount"
import { MyContext } from "../../../../../../../Context/Context"
import { useContext } from "react"

const AvatarBig = () => {
    const { photoUrl }= useContext(MyContext)
    const classes= useStyles()
    return (
        <div className={classes.containerAvatarBig}>
            <img referrerPolicy="no-referrer" draggable={false} src={photoUrl!} alt="open" className={classes.avatarBig} />
        </div>
  )
}

export default AvatarBig
