import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Tarjeta from '../Tarjeta/Tarjeta';
import { Tarea } from '../../types/Tareas';
import "./accordionHome.css"
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    categoria:string;
    tareas:Tarea[]
}

const AccordionHome = ({ categoria, tareas }:Props) => {


    return (
        <>
            <Container>
                <Accordion defaultActiveKey="1" flush alwaysOpen className='py-3' >
                    <Accordion.Item className='acordion-Header' eventKey="0">
                        <Accordion.Header > <h5 >{categoria}</h5> </Accordion.Header>
                        <Accordion.Body className='body-accordion'>
                            <Row xs={1} md={2} lg={4} className="py-3 g-4">

                                { 
                                tareas.length > 0 ? tareas.map((t, index: number) => (
                                    <Col key={index} className='d-flex justify-content-center align-items-center d-md-flex justify-content-md-around'>
                                        <Tarjeta t={t} />
                                    </Col>
                                )) : <div className="alert alert-warning w-100" role="alert">No hay tarea/as... Haz click {<Link to="/agregar-tarea">aqui</Link>} para agregar tarea</div>
                                }

                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

        </>
    )
}

export default AccordionHome