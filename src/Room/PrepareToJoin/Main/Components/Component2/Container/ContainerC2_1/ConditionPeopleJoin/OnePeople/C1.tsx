import { nanoid } from "nanoid"

const C1= (props: any)=> {
    return (
        <div className="_4w-ewq" style={{width: "100%", height: "100%", marginTop: props.allUserA=== undefined ? 12 : ((props.allUserA.length>=1 && props.allUserA.length<=2) ? 12 : 0), display: 'flex', justifyContent: "center", alignItems: 'center',flexDirection: "row", flexWrap: 'wrap'}}> 
            {
                props.allUserA.map((item: any)=> <div key={nanoid()} className="_-0wew-2wqa" style={{width: 24, height: 24,marginRight: 8,display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div className="_3232sk" style={{width: '100%', height: '100%', overflow: "hidden", borderRadius: "50%"}}><img src={item.photoUrl} alt="open" className="iq93kads-a" style={{width: "100%", height: "100%", objectFit: "cover"}} referrerPolicy="no-referrer" /></div></div> )
            }
        </div>
    )
}

export default C1