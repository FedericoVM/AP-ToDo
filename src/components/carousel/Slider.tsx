import Carousel from 'react-bootstrap/Carousel';
import img_1 from "../../../public/assets/img/imagen-1.jpg";
import img_2 from "../../../public/assets/img/imagen-2.jpg";
import img_3 from "../../../public/assets/img/imagen-3.jpg";
import "./slider.css"
import { Container } from 'react-bootstrap';

const Slider = () => {
    return (
        <>
            <Container fluid className='p-0 '>
                <Carousel className='carousel ' >
                    <Carousel.Item className='carousel-item' >
                        <img src={img_1} className='imagen-carousel d-block w-100 ' />
                        <Carousel.Caption className='carousel-caption d-none d-md-block'>
                            <h2>¡Hola! ¡Bienvenido!</h2>
                            <p>Aqui podrás tener tus pendientes bajo control y darles seguimientos</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        <img src={img_2} className='imagen-carousel d-block w-100' />
                        <Carousel.Caption className='carousel-caption d-none d-md-block' >
                            <h2>Organiza tu vida</h2>
                            <p >Con nuestra herramienta podrás crear tarjetas de tareas, asignar fechas limites y mucho más</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img_3} className='imagen-carousel d-block w-100' />
                        <Carousel.Caption className='carousel-caption d-none d-md-block'>
                            <h2>¡Eleva tu productividad hoy mismo!</h2>
                            <p>
                                Simplifica tu vida y aumenta tu productividad con nuestro sistema de gestion de tareas
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            
        </>
    )
}

export default Slider