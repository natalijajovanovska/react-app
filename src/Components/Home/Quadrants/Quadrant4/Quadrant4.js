import React from 'react';
import { Col, Card } from 'react-bootstrap';

class Quadrant4 extends React.Component {

    render() {
        let guestsList = this.props.guests;

        return (
            <Col md="6" className="pr-3 pl-3">
                <div className="border-col text-center">
                <h1>Quadrant N.4</h1>
                {guestsList.map((user) => (
                    <div key={user.id}>
                        {(user.address.geo.lat > 0) && (user.address.geo.lng < 0) ?
                            <Card bg="dark" text="white" className="mx-auto mt-5 card-custom" style={{ width: '18rem' }}>
                                <Card.Header className="font-weight-bold">
                                    {user.name}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {user.address.city} <br />
                                        <span>Lat: {user.address.geo.lat}</span> <br />
                                        <span>Lng: {user.address.geo.lng}</span>
        
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            : undefined}
                    </div>
                ))}
                </div>
                
            </Col>

        )
    };
}

export default Quadrant4;