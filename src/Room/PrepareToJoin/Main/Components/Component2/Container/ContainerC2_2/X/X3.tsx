const X3= (props: any)=> {
    return (
        <div style={{height: 36, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center',paddingRight: 8}}>
                {props.icon}
            </div>
            <div style={{fontSize: 14, fontWeight: 600, color: "#2e89ff",}}>
                Use companion mode
            </div>
        </div>  
    )
}

export default X3