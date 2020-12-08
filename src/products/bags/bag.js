import React from 'react';
import { Card,CardGroup, Container } from 'react-bootstrap'
import '../../theCSS.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from './rating'

const Bags = ({url}) => {


    return (
        <Container fluid>
            <CardGroup>
                <Card className="my-2 rounded">
                    {url ?
                        <a href={`/products/bags/${url.id}`}>
                            <Card.Img  variant="top" src={url.img || "holder.js/400px300"} />
                        </a>
                    :
                    <div className="myprogress">
                        <CircularProgress color="secondary" />
                    </div>
                    }
                    <Card.Body>
                    <Card.Title>{url.name}</Card.Title>
                        <Card.Text>
                            <Rating value={url.rating} text={`${url.numRating} κριτικές`}/>
                        </Card.Text>
                        <Card.Text>
                            €{url.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    )

}

export default Bags

/*
        const image = storage.ref('myfiles').child('pearl.png');
        async function asyncCall() {
            const myurl = await image.getDownloadURL();
            console.log(myurl);
            setUrl(myurl);
        }

        asyncCall();

        url || 
*/
/*

*/


/*
const [url, setUrl] = useState([]);
    //const [myfinal,setFinal] = useState([]);

    useEffect(() => {
        async function asyncCall() {
            const myurl = await axios.get("https://mysiteproject-8adcf.firebaseio.com/products.json")
                setUrl(myurl.data)
        }
        asyncCall();

    },[]);

    return (

        <Row sm={12} md={7} lg={5} xl={3}>
            {url.length > 0 ? (
                            url.map((el) => (
            <CardDeck >
                <Col key={el.id}>
                    <Card className='my-3 p-3 rounded'>

                                <div >
                                    <Card.Img
                                        variant="top"
                                        src={el.img || "holder.js/100px160"}
                                    />
                                    <Card.Body>
                                        <Card.Title> {el.name} </Card.Title>
                                        <Card.Text>{el.details}</Card.Text>
                                    </Card.Body>
                                </div>

                    </Card>
                </Col>
            </CardDeck>
             ))
             ) : (
             <div className="myprogress">
                 <CircularProgress color="secondary" />
             </div>
             )}
        </Row>

    )

*/