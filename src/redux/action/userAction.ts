import { getaccount, getpassword } from "../constant/index"

const handleAccount= (userObj: any)=> {
    return {
        type: getaccount,
        payload: userObj
    }
}

const handlePassword= (userObj: any)=> {
    return {
        type: getpassword,
        payload: userObj
    }
}

const handleUser= {
    handleAccount, 
    handlePassword,
}

export default handleUser