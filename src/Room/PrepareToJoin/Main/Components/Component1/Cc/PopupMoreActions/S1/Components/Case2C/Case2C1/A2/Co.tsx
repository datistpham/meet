import BrightnessMediumOutlinedIcon from '@mui/icons-material/BrightnessMediumOutlined';
import { Switch } from '@mui/material';
import { useContext, useState } from 'react';
import { ContainerPContext } from '../../../../../../../../../../../Container/Container';

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
        <div style={{width: "calc(100% - 200px - 68px)", height: 52, display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
            <BrightnessMediumOutlinedIcon style={{color: "#2e89ff"}} />
        </div>
    )
}
const Co2= (props: any)=> {
    return (
        <div style={{height: 52, width: 200, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <div style={{width: '100%', fontWeight: 600}}>Adjust video brightness</div>
            <div style={{fontSize: 12}}>Help people see you easier on light background</div>
        </div>  
    )
}
const Co3= (props: any)=> {
    const { setBrightness, openBrightness }= useContext(ContainerPContext)
    return (
        <div style={{width: 68, height: 52, display: 'flex', justifyContent: 'center',alignItems: 'center',}}>
            <Switch onChange={()=> setBrightness()} checked={openBrightness} />
        </div>
    )
}
export default Co