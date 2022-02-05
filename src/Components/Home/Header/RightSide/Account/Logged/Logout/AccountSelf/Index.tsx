import { useStyles } from "../InfoAccount"
import AvatarBig from "./AvatarBig"
import EmailName from "./EmailName"
import UserName from "./UserName"

const AccountIndex = () => {
    const classes= useStyles()
    return (
        <div className={classes.accountSelf}>
            <AvatarBig />
            <UserName />
            <EmailName /> 
        </div>
    )
}

export default AccountIndex
