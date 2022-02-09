

const Co= (props: any)=> {
    return (
        <div style={{width: '100%', height: 52,margin: "8px 0", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: "#f1f3f4", borderTopLeftRadius: 5, borderTopRightRadius: 5 , cursor: "pointer" }}>
            <CoS1 icon={props.icon} />
            <CoS2 category={props.category} devices={props.devices} />
            <CoS3 />
        </div>
    )
}
const CoS1= (props: any)=> {
    return (
        <div style={{width: 44, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <div style={{width: 22, margin: '0 12px'}}>
                {props.icon}
            </div>
        </div>
    )
}
const CoS2= (props: any)=> {
    return (
        <div style={{width: 'calc(100% - 44px - 44px)', height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <CoS21 category={props.category} />
            <CoS22 devices={props.devices} />
        </div>
    )
}
const CoS21= (props: any)=> {
    return (
        <div style={{fontSize: 14,fontWeight: 500, justifySelf: "flex-start", alignItems: 'left',width: "100%"}}>
            {props.category}
        </div>
    )
}
const CoS22= (props: any)=> {
    return (
        <div style={{height: 28, display: "flex", justifyContent: "center", alignItems: 'center',}}>
            <div style={{height: "100%"}}>
                {props.devices}
            </div>
        </div>
    )
}
const CoS3= (props: any)=> {
    return (
        <div style={{width: 44, height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <I />
        </div>
    )
}
const I= (props: any)=> {
    return (
        <span style={{width:20 , height: 20,display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 12px"}}>
            <svg style={{width: "41.6666666%", height: "20.833333333%"}} className="VfPpkd-t08AT-Bz112c-Bd00G" viewBox="7 10 10 5" focusable="false"><polygon className="VfPpkd-t08AT-Bz112c-mt1Mkb" stroke="none" fillRule="evenodd" points="7 10 12 15 17 10"></polygon></svg>
        </span>
    )
}

export const Co1= (props: any)=> {
    return (
        <div style={{width: '100%', height: 48}}>

        </div>
    )
}

export default Co