import React from 'react';
import './theCSS.css';
import { Row, Col, Container,Card,CardGroup} from 'react-bootstrap';

function MyFooter() {

    return (
      <footer sticky="bottom" className="py-3 bg-danger">
          <Container>
            <Row>
            <CardGroup>
              <Col className="text-left text-light">
                <Card border="danger" bg='danger' style={{ width: '13rem' }} variant='flush'>
                  <strong> ΚΑΤΑΣΤΗΜΑ </strong>
                  <p className="py-2">Cory Pelle Accessories<br/>
                    Κερκύρας 46,<br/> 
                    Αθήνα - Κυψέλη, 11362<br/>
                  </p>
                </Card>
              </Col>
              <Col className="px-2 text-light ">
                <Card border="danger" bg='danger' style={{ width: '13rem' }} variant='flush'>
                  <strong> ΟΔΗΓΙΕΣ ΑΓΟΡΩΝ </strong>
                  <p className="py-2">Τρόποι Πληρωμής<br/>
                     Τρόποι Αποστολής<br/>
                     Εκτέλεση Παραγγελίας<br/> 
                     Επιστροφές<br/>
                  </p>
                </Card>
              </Col>
              <Col className="px-2 text-light ">
                <Card border="danger" bg='danger' style={{ width: '12rem' }} variant='flush'>
                  <strong> ΠΛΗΡΟΦΟΡΙΕΣ </strong>
                  <p className="py-2">Η Εταιρεία<br/>
                      Επικοινωνία<br/> 
                  </p>
                </Card>
              </Col>
              </CardGroup>
            </Row>
            <hr className="new1"/>
            <p  className="text-light" style={{fontSize: 13}}>Copyright &copy; Cory Pelle</p>
          </Container>
      </footer>
    )
}

export default MyFooter;