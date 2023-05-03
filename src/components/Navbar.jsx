import React from "react";
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NewNavbar = () => {
    return(
        <Navbar bg="dark" variant="dark">

        <Container>

        <Navbar.Brand >
            

            <Link to="/Home" className="navbar-brand">BLACKMARKET</Link>
            </Navbar.Brand>
        
        <Nav className="justify-content-end">

                <li className="nav-item">
                <Link to="/Nosotros" className="nav-link" >nosotros</Link>
                </li>

                <li className="nav-item">
                <Link to="/Contacto" className="nav-link">contacto</Link>
                </li>

                <li className="nav-item">
                <Link to="/Productos" className="nav-link">productos</Link>
                </li>

        </Nav>
        </Container>

        </Navbar>
    )
}

export default NewNavbar

