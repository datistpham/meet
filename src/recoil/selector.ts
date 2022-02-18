import { selector } from "recoil"
import { listMember } from "./atom"
 
export const getListMember= selector({
    key: 'getListMember',
    get: ({get})=> {
        const list= get(listMember)
        return list
    }
})