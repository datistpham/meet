import { useStyles } from "../../../../../../MakeStyles/MakeStyles"
import PeopleJoinSummary from "./PeopleJoinSummary"

const ContainerC21= (props: any)=> {
    const classes= useStyles()
    
    return (
        <div className={classes.containerC21} style={{height: (props.allUserA=== undefined || props.allUserA.length=== 0) ? 80 : (props.allUserA.length===1 ? 104 : 120)}}>
            <div className="_39043" style={{fontSize: 28, fontWeight: 600, height: 36, width: '100%', textAlign: 'center'}}>
                Ready joining ? 
            </div>
            
            <PeopleJoinSummary allUserA={props.allUserA} />
        </div>
    )
}

export default ContainerC21