import { useStyles } from "../../../../../../MakeStyles/MakeStyles"
import PeopleJoinSummary from "./PeopleJoinSummary"

const ContainerC21= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.containerC21}>
            <div className="_39043" style={{fontSize: 28, fontWeight: 600, height: 36, width: '100%', textAlign: 'center'}}>
                Ready joining ?
            </div>
            <PeopleJoinSummary />
        </div>
    )
}

export default ContainerC21