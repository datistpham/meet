import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeRoot from "./Components/Home/Index"
import { ContextProVider } from "./Room/Index";
import './Styles/Styles.sass'
import './Styles/Styles.css'
import { app } from './Components/Home/Header/RightSide/Account/Firebase/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoot />} />
        <Route path="/:roomID" element={<ContextProVider />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App