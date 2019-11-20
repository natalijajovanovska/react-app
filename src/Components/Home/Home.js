import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner';
import Quadrant2 from './Quadrants/Quadrant2/Quadrant2';
import Quadrant1 from './Quadrants/Quadrant1/Quadrant1';
import Quadrant3 from './Quadrants/Quadrant3/Quadrant3';
import Quadrant4 from './Quadrants/Quadrant4/Quadrant4';


class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            guests: [],
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({
                guests: json,
                isLoading: false
            });
            // console.log(json);
        } catch (error) {
            console.log(error);
            alert("Something went wrong, please try again");
        }
    }

    render() {

        if (this.state.isLoading) {
            return <LoadingSpinner />
        }

        return (
                <Container fluid={true}>
                    <div className="empty-div"></div>
                    <Row className="mt-3 custom-mb">
                        <Quadrant2 guests={this.state.guests} />
                        <Quadrant1 guests={this.state.guests} />
                    </Row>
                    <Row className="mt-4 custom-mb">
                        <Quadrant3 guests={this.state.guests} />
                        <Quadrant4 guests={this.state.guests} />
                    </Row>
                </Container>
        )
    };
}

export default Home;