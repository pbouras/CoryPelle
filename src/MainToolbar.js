import React from 'react';
import './theCSS.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function MainToolbar() {

    return (
        <>
            <hr />
            <Navbar sticky="top" expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='m-auto'>
                            <LinkContainer to="/products/bags">
                                <Nav.Link className="text-dark"> <strong>Τσάντες </strong></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products/bags">
                                <Nav.Link className="text-dark"> <strong> Φουλάρια </strong></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products/bags">
                                <Nav.Link className="text-dark"> <strong>Ζώνες </strong></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products/bags">
                                <Nav.Link className="text-dark"> <strong> Βαλίτσες </strong></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
        </>
    )


}
export default MainToolbar