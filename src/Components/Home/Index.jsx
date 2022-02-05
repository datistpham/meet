import { v1 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import HeaderComponent from "./Header/Header"
import IndexMainSection from "./Case/Index"
const useStyles= makeStyles({
    rootHeader: {
        width: '100%',
        height: '100%',
    }
})
const theme= createTheme({
    typography: {
        fontFamily: [
            'Product Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
        ].join(','),
    }
})

const HomeRoot = (props) => {
    const classes= useStyles()
    const navigate= useNavigate()
    const create=() =>  {
        const id = uuid()
        navigate(`/room/${id}`)
    }
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.rootHeader}>
                <HeaderComponent />
                <IndexMainSection />
            </div>
        </ThemeProvider>
    )
}

export default HomeRoot