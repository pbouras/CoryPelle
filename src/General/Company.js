import React from 'react';
import shop from './shop.jpg'
import { Container } from 'react-bootstrap';
import '../theCSS.css';

function Company() {

    return (
        <Container>
            <div> 
                <img className="myStore" src={shop} alt="Shop" />
            </div>
        </Container>
    )
}

export default Company;