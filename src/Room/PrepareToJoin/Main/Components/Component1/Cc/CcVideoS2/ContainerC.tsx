import C from "./C"

const ContainerC= (props: any)=> {
    return (
        <div className={`_6000`} style={{padding: "0 12px"}} >
            <C backgroundColor={props.backgroundColor} borderColor={props.borderColor} icon={props.icon} title={props.title} actionF={props.actionF} actionF2={props.actionF2} actionF3={props.actionF3} direction="top" width={55} height={55} />
        </div>
    )
}

export default ContainerC