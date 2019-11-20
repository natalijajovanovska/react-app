import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './logo193.png';

class Footer extends React.Component {

    scrollTopFn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <Container fluid="true" className="bg-dark mt-5">
                <Row>
                    <Col className="text-center">
                        <img src={Logo} style={{ width: "60px", padding: "10px", cursor: "pointer" }} onClick={this.scrollTopFn} alt="Logo"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer;