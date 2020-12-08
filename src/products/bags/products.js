import React,{useState,useEffect } from 'react';
import Bags from './bag';
import {Col,Container,Row} from 'react-bootstrap'
import axios from 'axios'

function Products() { 

    const [url, setUrl] = useState([]);

    useEffect(() => {
        async function asyncCall() {
            const myurl = await axios.get("https://mysiteproject-8adcf.firebaseio.com/products.json")
                setUrl(myurl.data)
        }
        asyncCall();

    },[]);

    /*
    if (url.data) {
        let myvar = url.data;
        console.log(myvar);
        myvar.map((myvar) => console.log(myvar.id));
    }
    */
    return (
        <Container>
            <Row>
                {url.map((url => (
                        <Col key={url.id} sm={12} md={6} lg={5} xl={4}>
                            <Bags url={url} />
                        </Col>    
                        )
                ))}
            </Row>
        </Container>
    )
}

export default Products