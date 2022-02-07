import C from "./C"

const ContainerC= (props: any)=> {
    return (
        <div className={`_6000`} style={{padding: "0 12px"}} >
            <C backgroundColor={props.backgroundColor} borderColor={props.borderColor} icon={props.icon} title={props.title} actionF={props.actionF} actionF2={props.actionF2} direction="top" />
        </div>
    )
}

export default ContainerC