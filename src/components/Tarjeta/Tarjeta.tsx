import { Card } from "react-bootstrap";
import "./tarjeta.css";
import { Tarea } from "../../types/Tareas";
import {NavLink} from "react-router-dom";

interface Props {
  t:Tarea
}

const Tarjeta = ({ t }:Props) => {
 

  return (
    <>
      <Card className="card-tareas" style={{ width: '18rem', height:`21rem` }}>
        <Card.Img variant="top" className="img-card" src={t.imagen} />
        <Card.Body className="card-body">
          <NavLink to={`/`+ t.id} className=" link text-decoration-none "> <Card.Title className="fs-6" >{t.titulo}</Card.Title> </NavLink>
          <Card.Text className="texto-card">
            {t.descripcion}
          </Card.Text>
          <Card.Text className="texto-card">
            Tiempo: {t.tiempo}
          </Card.Text>
         
        </Card.Body>
      </Card>
    </>
  );
};

export default Tarjeta;
