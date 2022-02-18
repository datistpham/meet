import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import HomeRoot from "./Components/Home/Index"
import { ContextProVider } from "./Room/Index"
import './Styles/Styles.sass'
import './Styles/Styles.css'
import { io } from "socket.io-client"
import { app } from './Components/Home/Header/RightSide/Account/Firebase/index'
import { useEffect, useRef, lazy, Suspense } from "react"
import { useState } from "react"
import LinearIndeterminate from "./Components/404/Delay404/Delay404"
import BossRoom from "./boss_room/BossRoom"

const F404 = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/404/Index")), 500);
  });
});

const App= () =>  {
  const socketRef= useRef(null)
  // const { roomID }= useParams()
  // eslint-disable-next-line
  const [roomID, setRoomID]= useState(()=> window.location.href.split("/")[3])
  const [exist, setExist]= useState(()=> null)

  useEffect(()=> {
    socketRef.current= io("http://localhost:4000/", { transports: ["websocket", "polling"] })
    socketRef.current.emit("check room", { roomID })
    socketRef.current.on("check room done", (data)=> {
      if(data.exist=== true) {
        setExist(()=> true)
      }
      else {
        setExist(()=> false)
      }
    })
  })
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoot />} />
          <Route path="/:roomID" element={exist=== true ? <ContextProVider /> : <Suspense fallback={<LinearIndeterminate />}><F404 /></Suspense>} />
          <Route path="/:roomID/auth_user=1" element={<BossRoom  />} />
        </Routes>
    </BrowserRouter>
  )
}


export default App