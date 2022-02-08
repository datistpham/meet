import React from "react"
import { makeStyles } from "@mui/styles"
import TitleHeader from "../../../Components/Home/Header/Title/Title"
import RightSideP from "./RightSide/RightSideP"
const useStyles= makeStyles({
    header: {
        width: '100%',
        height: 60,
        padding: 8,
        boxSizing: 'border-box',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        userSelect: 'none'  
    }
})

const Header= ()=> {
    const classes= useStyles()
    return (
        <div className={classes.header}>
            <TitleHeader />
            <RightSideP />
        </div>
    )
}

export default React.memo(Header)