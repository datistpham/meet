import AvatarLogged from "../../../../Components/Home/Header/RightSide/Account/Logged/AvatarLogged"
import { MyContext } from "../../../../Components/Context/Context"
import { useContext, lazy, Suspense } from "react"
import EmailName from "../../../../Components/Home/Header/RightSide/Account/Logged/Logout/AccountSelf/EmailName"
const UseAnotherAccount = lazy(() => {
    return new Promise((resolve: any )=> {
      setTimeout(() => resolve(import("./UseAnotherAccount")), 500);
    });
  });

const RightSideP= ()=> {
    const { photoUrl }= useContext(MyContext)
    return (
        <div className="_7200 S3RDod" style={{display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: 'center', gap: 10}}>
            <div role="button" style={{display: "flex", flexDirection: 'column',cursor: 'pointer' }}>
                <EmailName />
                <Suspense fallback={<div></div>}>
                    <UseAnotherAccount />
                </Suspense>
            </div>
            <AvatarLogged photoUrl={photoUrl}  />
        </div>
    )
}

export default RightSideP