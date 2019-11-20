import React from 'react';
import './LoadingSpinner.css';
import { Container, Row, Col } from 'react-bootstrap';

const LoadingSpinner = () => (
    <Container>
        <Row>
            <Col xs="12" className="text-center">
                <div className="empty-div"></div>
                <i className="fa fa-spinner fa-spin spinner" />
            </Col>
        </Row>
    </Container>
);

export default LoadingSpinner;