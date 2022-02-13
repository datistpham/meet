import { getaccount, getpassword } from "../constant/index"

const initialState= {
    account: "",
    password: ""
}
const userReducer= (state= initialState, action: any)=> {
    switch(action.type) {
        case getaccount:
            console.log(action.payload)
            return {...state, account: action.payload}    
        case getpassword:
            return {...state, password: action.payload}
        default:
            return state
    }
}
export default userReducer