import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import DetalleTarea from "../pages/detalleTarea/DetalleTarea"
import AgregarTarea from "../pages/agregarTarea/AgregarTarea"



const AppRutas: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<DetalleTarea  />} />
        <Route path="/agregar-tarea/" element={<AgregarTarea/>} />
      </Routes>
    </>
  )
}

export default AppRutas