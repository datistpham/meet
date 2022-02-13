import C1 from "./C1"
import C2 from "./C2"

const Index= (props: any)=> {
    return (
        <div className="_39wdssd" style={{height: '100%', textAlign: "center", display: "flex", flexDirection: "column", justifyContent: 'center',alignItems: 'center',}}>
            <C1 allUserA={props.allUserA} />
            <C2 allUserA={props.allUserA} />
        </div>

    )
}

export default Index