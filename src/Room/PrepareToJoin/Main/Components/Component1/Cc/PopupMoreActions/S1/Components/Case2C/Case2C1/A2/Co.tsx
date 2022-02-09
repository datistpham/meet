
const Co= (props: any)=> {
    return (
        <div style={{width: '100%', marginTop: "1rem", display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <div style={{width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>

                <Co1 />
                <Co2 />
                <Co3 />
            </div>
        </div>
    )
}

const Co1= (props: any)=> {
    return (
        <div style={{width: "calc(100% - 200px - 68px)", height: 52}}> 
             
        </div>
    )
}
const Co2= (props: any)=> {
    return (
        <div style={{height: 52, width: 200, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>

        </div>  
    )
}
const Co3= (props: any)=> {
    return (
        <div style={{width: 68, height: 52}}>

        </div>
    )
}
export default Co