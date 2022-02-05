import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeRoot from "./Components/Home/Index"
// import Test from "./Components/Test";
import Room from "./Components/Room"
import './Styles/Styles.sass'
import { app } from './Components/Home/Header/RightSide/Account/Firebase/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoot />} />
        <Route path="/room/:roomID" element={<Room />} />
        {/* <Route path="/room/:roomID" element={<Test />} /> */}

      </Routes>
    </BrowserRouter>
  )
}


export default App