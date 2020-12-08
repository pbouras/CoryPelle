import React from 'react';
import './theCSS.css';
import { Navbar, Nav, NavDropdown, Container, Row,Col} from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap';
import cropLogo from './cropLogo.png'; 

function Toolbar() {

    return (
        <footer className="py-3" expand="lg" bg="light" >
            <Container>
            <Row>
                <Col className="text-left">
                    <LinkContainer to="/">
                        <Nav.Link className="mylink py-5"> Cory Pelle </Nav.Link>
                    </LinkContainer>
                </Col>
                <Col className="text-center">
                    <LinkContainer to="/">
                    <Nav.Link > 
                        <img className = "photo" src={cropLogo} alt="Cory Pelle Logo" /> 
                    </Nav.Link>
                    </LinkContainer>
                </Col>
                <Col className="text-right py-5">
                    <div>
                        <i className="fas fa-shopping-cart mr-4"></i> 
                        <i className="fas fa-search"></i>
                    </div>
                </Col>
            </Row>
            </Container>
        </footer>

  )


}
export default Toolbar