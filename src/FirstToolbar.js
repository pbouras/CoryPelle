import React from 'react';
import './theCSS.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Toolbar() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav className="py-2 px-2 text-light" style={{fontSize: 13}}> 
                            <i className = "fas fa-dolly-flatbed py-1 px-1" fontSize="small"></i> Δωρεάν Μεταφορικά άνω των 50€
                        </Nav>
                        <div className="px-2" style={{borderRight: "1px solid gray"}}/>
                        <Nav className="py-2 px-2 text-light" style={{fontSize: 13}}> 
                            <PhoneIcon fontSize="small"></PhoneIcon> +30 6976709071
                        </Nav>
                        <div className="px-2" style={{borderRight: "1px solid gray"}}/>
                        <Nav className="py-2 px-2 text-light" style={{fontSize: 13}}> 
                            <AccessTimeIcon fontSize="small"></AccessTimeIcon> Δευτ - Παρ: 9.00 - 17.00
                        </Nav>
                    </Nav>
                    <Nav className="ml-auto" > 
                        <Nav.Link className="text-light" style={{fontSize: 13}} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon fontSize="small"></FacebookIcon>
                        </Nav.Link>
                        <Nav.Link className="text-light" style={{fontSize: 13}} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon fontSize="small"></InstagramIcon>
                        </Nav.Link>
                        <LinkContainer className="text-light" style={{fontSize: 13}} to="/MyMap">
                            <Nav.Link> <PersonIcon fontSize="small"/> </Nav.Link>
                        </LinkContainer>
                        <LinkContainer className="text-light" style={{fontSize: 13}} to="/Company">
                            <Nav.Link > Η Εταιρία</Nav.Link>
                        </LinkContainer>
                        <LinkContainer className="text-light" style={{fontSize: 13}} to="/MyMap">
                            <Nav.Link > <EmailIcon fontSize="small"/> Επικοινωνία</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}
export default Toolbar