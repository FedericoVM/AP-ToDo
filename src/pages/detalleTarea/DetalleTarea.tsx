import { Col, Container, Form, Image, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./detalleTarea.css";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import { editarTarea, eliminarTarea, traerTarea, traerTareas } from "../../services/tareasServicio";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tarea } from "../../types/Tareas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";



const DetalleTarea = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [nuevoEstado, setNuevoEstado] = useState<Estado>();

  const [tarea, setTarea] = useState<Tarea>("");

  const [tareasFiltradas, setTareasFiltradas] = useState<Tarea[]>([])


  const mostrarTarea = async (id: string) => {
    const resp = await traerTarea(id);
    setTarea(resp);

  }

  const borrarTarea = (id: string): void => {
    eliminarTarea(id);
    toast.warning('La tarea fue eliminada')
    navigate("/")

  }

  const cambiarEstado = async (id: string) => {

    const resp = await traerTarea(id)
    resp.estado = nuevoEstado;
    await editarTarea(id, resp)
    toast.success('El estado de la tarea se cambió correctamente')
    navigate("/")

  }

  const tareasRelacionadas = async (id:string) => {
    const resp = await traerTareas()
    const data = await traerTarea(id);
    const filtrado = resp.filter((t) => t.estado == data.estado)
    setTareasFiltradas(filtrado)

  }

  useEffect(() => {
    mostrarTarea(id);
    tareasRelacionadas(id);
  }, [])


  return (
    <>
      <div className="detalles-tarea">
        < Container className="d-flex flex-column h-50 " fluid="md">
          <Row className="my-4">
            <Col lg={10} className="mx-auto">
              <div className="d-md-flex justify-content-md-center  h-100">
                <Col>
                  <Image src={tarea.imagen} className="h-100" fluid />
                </Col>
                <Col>
                  <Card className="border-none" id="card-detalles">
                    <Card.Header as="h5" className="border-none fw-bold">{tarea.titulo}</Card.Header>
                    <Card.Body className="h-100">
                      <Card.Title>Tiempo: {tarea.tiempo} dias</Card.Title>
                      <Card.Text>
                        {tarea.descripcion}
                      </Card.Text>
                      <Card.Text>Responsable: {tarea.responsable}</Card.Text>
                      <Card.Text>Estado: {tarea.estado}</Card.Text>
                      <Form.Select className="my-3" onChange={(e) => {
                        setNuevoEstado(e.target.value);
                      }}>
                        <option>Selecionar estado...</option>
                        <option value="Por hacer">Por hacer</option>
                        <option value="En producción" >En producción</option>
                        <option value="Por testear" >Por testear</option>
                        <option value="Completada" >Completada</option>
                      </Form.Select>
                      <div className="w-75  mt-2 d-flex flex-column d-md-flex flex-md-row justify-content-md-around">
                        <Button variant="primary" className="mb-2 mb-md-0" onClick={() => { cambiarEstado(tarea.id) }}>Cambiar estado</Button>
                        <Button variant="danger" className="eliminar  " onClick={() => { borrarTarea(tarea.id) }}><FontAwesomeIcon icon={faTrash} size="lg" /></Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

              </div>
            </Col>

          </Row>

        </Container >

        <Container className="py-3 h-50">
          <div>
            <h3 className="my-3 text-center alert alert-warning"  >Tareas relacionadas</h3>
          </div>
          <Row className="my-2 g-3" xs={1} sm={2} md={4}  >

            {tareasFiltradas.map((t, index) => (
              <Col key={index} className="d-flex justify-content-center " >
                <Tarjeta key={index} t={t} />
              </Col>
            ))}


          </Row>
        </Container>
      </div>

    </>
  )
}

export default DetalleTarea