import React,{useState,useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card, Button, Dropdown, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Rating from './rating';

const Details = ({match}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function asyncCall() {
            const myproduct = await axios.get(`https://mysiteproject-8adcf.firebaseio.com/products/${match.params.id}.json`)
                setProduct(myproduct.data)
        }
        asyncCall();

    },[]);
    console.log(product)

    return (
        <Container>
            <Link className='py-3' to="/products/Bags"> 
                <i  className="fas fa-arrow-circle-left fa-3x"></i>
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.img} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3> {product.name} </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong> Τιμή: </strong> €{product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numRating} κριτικές`}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong> Περιγραφή: </strong> {product.details}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Επέλεξε χρώμα 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item> {product.color0} </Dropdown.Item>
                                    <Dropdown.Item> {product.color1} </Dropdown.Item>
                                    <Dropdown.Item> {product.color2} </Dropdown.Item>
                                    <Dropdown.Item> {product.color3} </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <strong> €{product.price} </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="primary">
                                    Προσθήκη στο καλάθι
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </Container>
    )


}
export default Details