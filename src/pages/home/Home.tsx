import { useEffect, useState } from "react";
import ListaTareas from "../../components/ListaTareas/ListaTareas"
import "./home.css"
import { traerTareas } from "../../services/tareasServicio";
import { Tarea } from "../../types/Tareas";
import Slider from "../../components/carousel/Slider";
import "./home.css"

const Home = () => {

  const [tareas, setTareas] = useState<Tarea[]>([]);

  const mostrarTareas = async () => {
    const resp = await traerTareas()
    setTareas(resp);

  }

  useEffect(() => {
    mostrarTareas()
  }, [])



  return (
    < div className="home">
      <Slider />
      <div>
        <ListaTareas tareas={tareas} />
      </div>
    </div>
  )
}

export default Home