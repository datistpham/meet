import ButtonJoinMeetingRoom from "./JoinMeetingRoom/ButtonNewJoinMeetingRoom"
import ButtonNewMeetingRoom from "./NewMeetingRoom/ButtonNewMeetingRoom"
import { useStyles } from "../../Index"

const IndexRootFunc = (props: any) => {
    const classes= useStyles()
    return (
        <div className={`${classes.p} _4500`}>
            <ButtonNewMeetingRoom />
            <ButtonJoinMeetingRoom />
        </div>
    )
}

export default IndexRootFunc
