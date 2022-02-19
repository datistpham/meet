import { ShareLinkType } from "../type/share_linktype"


const sendLink= async (shareLink: ShareLinkType )=> {
    try {
        await navigator.share(shareLink)
        console.log("Share success...")
    } catch (error) {
        console.log(error)
    }
}

export { sendLink }