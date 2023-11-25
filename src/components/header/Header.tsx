import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "./header.css"
import {NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <Navbar expand="lg" id='navBar' className='fixed-top'>
                <Container fluid id='header'>
                    <Navbar.Brand href="/">  <FontAwesomeIcon icon={faSquareCheck}  size='2xl' style={{ color: "#ff6000", }} /> <p className='d-inline px-1 fw-bold'>AP To-Do</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" w-100 d-md-flex justify-content-md-center  "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className='navLink text-decoration-none m-0 my-md-auto p-1 mx-md-2 fs-6' to="/">Inicio</NavLink>
                            <NavLink className='navLink  text-decoration-none m-0 my-md-auto mx-md-2 fs-6' to={"/agregar-tarea"} >Agregar tarea</NavLink>
                            <NavLink className='navLink text-decoration-none m-0 my-md-auto mx-md-2 fs-6' to={"#action2"}>Soporte</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    )
}

export default Header