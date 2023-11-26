import { Col, Container, Form, Image, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./detalleTarea.css";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tarea } from "../../types/Tareas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";
import { serviceApi } from "../../services/tareasServicio";




const DetalleTarea = () => {

  const { id } =  useParams();


  

  const navigate = useNavigate();



  const [tarea, setTarea] = useState<Tarea>();

  const [tareasFiltradas, setTareasFiltradas] = useState<Tarea[]>([])

  const [nuevoEstado, setNuevoEstado] = useState<string>("");

  const mostrarTarea = async () => {
    const resp = await serviceApi.traerTarea(Number(id))
    if (resp.id) {
      setTarea(resp);
    }
    

  }

  const borrarTarea = async (): Promise<void> => {
    serviceApi.eliminarTarea(Number(id));
    toast.warning('La tarea fue eliminada')
    navigate("/")

  }

  const cambiarEstado = async ()  => {
    console.log(nuevoEstado);
    const tareaActualizada = await serviceApi.editarTarea(Number(id), nuevoEstado)
    setTarea(tareaActualizada)
    toast.success('El estado de la tarea se cambió correctamente')
    navigate("/")

  }

  const tareasRelacionadas = async () => {
    const resp = await serviceApi.traerTareas()
    const data = await serviceApi.traerTarea(Number(id));
    const filtrado = resp.filter((t:Tarea) => t.estado == data.estado)
    setTareasFiltradas(filtrado)

  }

  useEffect(() => {
    mostrarTarea()
    tareasRelacionadas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])


  return (
    <>
      <div className="detalles-tarea">
        < Container className="d-flex flex-column h-50 " fluid="md">
          <Row className="my-4">
            <Col lg={10} className="mx-auto">
              <div className="d-md-flex justify-content-md-center  h-100">
                <Col>
                  <Image src={tarea?.imagen} className="h-100 img-fluid " fluid />
                </Col>
                <Col>
                  <Card className="border-none" id="card-detalles">
                    <Card.Header as="h5" className="border-none fw-bold">{tarea?.titulo}</Card.Header>
                    <Card.Body className="h-100">
                      <Card.Title>Tiempo: {tarea?.tiempo} dias</Card.Title>
                      <Card.Text>
                        {tarea?.descripcion}
                      </Card.Text>
                      <Card.Text>Responsable: {tarea?.responsable}</Card.Text>
                      <Card.Text>Estado: {tarea?.estado}</Card.Text>
                      <Form.Select className="my-3" name="estado" onChange={(e) => {
                        setNuevoEstado(e.target.value);
                      }}>
                        <option>Selecionar estado...</option>
                        <option value="Por hacer">Por hacer</option>
                        <option value="En producción" >En producción</option>
                        <option value="Por testear" >Por testear</option>
                        <option value="Completada" >Completada</option>
                      </Form.Select>
                      <div className="w-75  mt-2 d-flex flex-column d-md-flex flex-md-row justify-content-md-around">
                        <Button variant="primary" className="mb-2 mb-md-0" onClick={() => { cambiarEstado() }}>Cambiar estado</Button>
                        <Button variant="danger" className="eliminar  " onClick={() => { borrarTarea() }}><FontAwesomeIcon icon={faTrash} size="lg" /></Button>
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