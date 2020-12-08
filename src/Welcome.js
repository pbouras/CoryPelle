import React from 'react';
import {Button, Carousel,Container,Card,Col,Row,CardGroup,ListGroup} from 'react-bootstrap'
import myimg from './yy.png';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './theCSS.css';
import winter from './ff.jpg';
import images from './images.jpg';

function Welcome() {


    return (
        <>
                <Row>
                    <Col>
                        <Carousel className="bg-dark m-6">
                            <Carousel.Item>
                                <Link to="/products/bags">
                                    <img
                                        style= {{height: "400px", margin: "0px", width: "100%"}}
                                        src={winter}
                                        alt="First slide"
                                    />
                                </Link>
                            </Carousel.Item>
                            <Carousel.Item >
                                <Link to="/products/bags">
                                    <img
                                        style= {{backgroundimage: "url(img/4.jpg)", height: "400px", backgroundsize: "contain", margin: "0px auto", width: "100%"}}
                                        src={images}
                                        alt="First slide"
                                    />
                                </Link>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Container className="py-3">
                <Row>
                    <CardGroup>
                        <Col>
                            <Card border="white" bg='white' style={{ width: '25rem' }} variant='flush'>
                                <p className="mylink text-center"> famous brands </p>
                                <p className="py-2 text-center"><strong>Εδώ θα βρείτε όλα τα επώνυμα Brands</strong><br/>
                                Ανακάλυψε όλα τα Brands στο ηλεκτρονικό μας κατάστημα καθώς και στο φυσικό μας κατάστημα</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card border="white" bg='white' style={{ width: '25rem' }} variant='flush'>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                <img className = "photo" src={myimg} alt="Verde Logo" />
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>

                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </CardGroup>
                </Row>
            </Container>

        </>
    )


}

export default Welcome

/*

*/