import Index from "./ConditionPeopleJoin/OnePeople/Index"

const PeopleJoinSummary= (props: any)=> {

    return (
        <div className="_0923i23" style={{height: props.allUserA=== undefined ? "calc(80px - 36px)" : ((props.allUserA.length >=1 && props.allUserA.length<= 2) ? 68 : "calc(120px - 36px)"), width: '100%'}}>
            <div className="_94i32e" style={{height: props.allUserA=== undefined ? 44 : ((props.allUserA.length >=1 && props.allUserA.length<= 2) ? 68 : "calc(120px - 36px)"), width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div className="_320234" style={{height: props.allUserA=== undefined ? 20 : ((props.allUserA.length >=1 && props.allUserA.length<= 4) ? "auto" : 20), margin: '8px 8px 0 8px', textAlign: "center", fontSize: 14, fontWeight: 600,}}>
                    {
                        props.allUserA=== undefined
                        &&
                        <div> No one at here</div>
                    }
                    {
                        props.allUserA !==undefined && ((props.allUserA.length>=1 && props.allUserA.length<= 4)
                        &&
                        <Index allUserA={props.allUserA} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default PeopleJoinSummary