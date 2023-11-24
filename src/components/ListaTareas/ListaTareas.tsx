import "./listaTareas.css";
import { Tarea } from "../../types/Tareas";
import AccordionHome from "../accordion/AccordionHome";


interface Props {
  tareas: Tarea[];
}

const ListaTareas = ({ tareas }: Props) => {


  return (
    <div  id="contenedor-tareas">
      <h2 className="my-4 text-center text-black">Mis tareas</h2>
      <AccordionHome
        categoria="Por hacer"
        tareas={tareas.filter((tarea) => tarea.estado === "Por hacer")}
      />
      <AccordionHome
        categoria="En producción"
        tareas={tareas.filter((tarea) => tarea.estado === "En producción")}
      />
      <AccordionHome
        categoria="Por Testear"
        tareas={tareas.filter((tarea) => tarea.estado === "Por testear")}
      />
      <AccordionHome
        categoria="Completada"
        tareas={tareas.filter((tarea) => tarea.estado === "Completada")}
      />
    </div>
  );
};

export default ListaTareas;
