import { HandleLogin } from "../../../../Components/Home/Header/RightSide/Account/NoLogin/HandleLogin"

const UseAnotherAccount= ()=> {
    return (
        <div className="S3RDodd dsdsw" onClick={()=> HandleLogin()} style={{fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap', textAlign: 'right'}}>use another account</div>
    )
}

export default UseAnotherAccount