
import { useState } from 'react'
import DontExit2 from './DontExit2'

const DontExist= ()=> {
    const [open, setOpen]= useState<boolean>(()=> true)
    return (
        <>
            {
                open=== true &&
                <DontExit2 setOpen={setOpen} />
            }
        </>
    )
}   

export default DontExist