import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';

const NotFound = () => (
    <Container>
        <div className="empty-div"></div>
        <Row>
            <Col xs="12" className="text-center">
                <Jumbotron>
                    <p className="display-1 text-danger font-weight-bold">404 Error</p>
                    <h2>Sorry, the page you are looking for could not be found.</h2>
                    <Button variant="success" className="btn-white-text"><Link to="/">Go back to Home Page</Link></Button>
                </Jumbotron>
            </Col>
        </Row>
    </Container >
)

export default NotFound;