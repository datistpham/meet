import AvatarLogged from "../../../../Components/Home/Header/RightSide/Account/Logged/AvatarLogged"
import { MyContext } from "../../../../Components/Context/Context"
import { useContext } from "react"
import EmailName from "../../../../Components/Home/Header/RightSide/Account/Logged/Logout/AccountSelf/EmailName"

const RightSideP= ()=> {
    const { photoUrl }= useContext(MyContext)
    return (
        <div className="_7200" style={{display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: 'center', gap: 10}}>
            <EmailName />
            <AvatarLogged photoUrl={photoUrl}  />
        </div>
    )
}

export default RightSideP