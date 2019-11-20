import React from 'react';
import { Container, Row, Col, Button, ButtonToolbar, Modal, FormGroup, FormLabel, FormControl, Card } from 'react-bootstrap';

class CustomGuest extends React.Component {

    constructor() {
        super();
        this.state = {
            customInvites: [],
            showAdd: false,
            showEdit: false,
            currentIndex: 0,
            newestInvite: { 
                guestName: "", 
                guestCity: "" },
            def: -1
        }
    }

    deleteGuest(index) {
        if (window.confirm("Do you want to delete this guest?")) {
            let customInvites = this.state.customInvites.slice();
            customInvites.splice(index, 1);
            localStorage.setItem('customInvites', JSON.stringify(customInvites));
            this.setState({ customInvites });
            this.setState({ def: 0 });
        }
    }

    updateNewestGuest(guestName, guestCity) {
        this.setState({ newestInvite: { guestName: guestName, guestCity: guestCity } })
    }

    saveNewGuest() {
        if (this.state.newestInvite.guestName < 1 || this.state.newestInvite.guestCity < 1) {
            alert("Enter guest");
        } else {
            let customInvites = this.state.customInvites.slice();
            customInvites.push({ guestName: this.state.newestInvite.guestName, guestCity: this.state.newestInvite.guestCity });
            localStorage.setItem('customInvites', JSON.stringify(customInvites));
            this.setState({ customInvites });
            this.setState({ newestInvite: { guestName: "", guestCity: "" } });
            this.close();
        }
    }

    close = () => {
        if (this.state.showAdd) {
            this.setState({ showAdd: false })
        } else if (this.state.showEdit) {
            this.setState({ showEdit: false })
        }
    }

    open = (state, currentIndex) => {
        this.setState({ [state]: true });
        this.setState({ currentIndex });
    }

    updateGuestName(guestName, currentIndex) {
        let customInvites = this.state.customInvites.slice();
        customInvites[currentIndex] = { guestName: guestName, guestCity: customInvites[currentIndex].guestCity };
        localStorage.setItem('customInvites', JSON.stringify(customInvites));
        this.setState({ customInvites });
    }

    updateGuestCity(guestCity, currentIndex) {
        let customInvites = this.state.customInvites.slice();
        customInvites[currentIndex] = { guestName: customInvites[currentIndex].guestName, guestCity: guestCity };
        localStorage.setItem('customInvites', JSON.stringify(customInvites));
        this.setState({ customInvites });
    }

    componentDidMount() {
        let customInvites = JSON.parse(localStorage.getItem('customInvites')) || [];
        this.setState({ customInvites });
    }

    render() {

        const { customInvites, newestInvite, currentIndex } = this.state;

        return (
            <Container>
                <div className="empty-div"></div>
                <Row>
                    <Col>
                        <h2 className="text-center font-weight-bold mt-3">Want a bigger party?</h2>
                        <Button variant="success" className="mx-auto text-white mt-5 mb-5 d-block" 
                        onClick={(event) => this.open("showAdd", currentIndex)}>
                            Add Custom Guest
                        </Button>

                        {customInvites.length > 0 && (
                            <div>
                                {customInvites.map((guest, index) => (
                                    <Card key={index} bg="dark" text="white" className="mx-auto mt-5 card-custom" style={{ width: '18rem' }}>
                                        <Card.Header className="font-weight-bold text-center">
                                            {guest.guestName}
                                        </Card.Header>
                                        <Card.Body className="text-center">
                                            <Card.Text>
                                                {guest.guestCity}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <ButtonToolbar>
                                                <Button className="btn-block" variant="danger"
                                                    onClick={(event) => this.deleteGuest(index)}>
                                                    Delete guest
                                                </Button>
                                                <Button variant="info" className="btn-block"
                                                    onClick={(event) => this.open("showEdit", index)}>
                                                    Edit guest
                                                </Button>
                                            </ButtonToolbar>
                                        </Card.Footer>
                                    </Card>
                                ))}

                                <Modal show={this.state.showEdit} onHide={this.close} className="mt-5">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit guest</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <FormGroup controlId="formBasicsText">
                                            <FormLabel>Edit Guest Name</FormLabel>
                                            <FormControl
                                                type="text"
                                                value={customInvites[currentIndex].guestName}
                                                placeholder="Edit Guest Name"
                                                onChange={(event) => this.updateGuestName(event.target.value, currentIndex)}>
                                            </FormControl>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText2">
                                            <FormLabel>Edit Guest City</FormLabel>
                                            <FormControl 
                                                type="text"
                                                value={customInvites[currentIndex].guestCity}
                                                placeholder="Edit Guest City"
                                                onChange={(event) => this.updateGuestCity(event.target.value, currentIndex)}>
                                            </FormControl>
                                        </FormGroup>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" 
                                        onClick={(event) => { this.close() }}>
                                            Save Edited guest
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )}

                        <Modal show={this.state.showAdd} onHide={this.close} className="mt-5">
                            <Modal.Header closeButton>
                                <Modal.Title>Add guest</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <FormGroup controlId="formBasicText">
                                    <FormLabel>Guest Name</FormLabel>
                                    <FormControl
                                        type="text"
                                        value={newestInvite.guestName}
                                        placeholder="Enter Guest Name"
                                        onChange={(event) => this.updateNewestGuest(event.target.value, newestInvite.guestCity)}>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId="formBasicText2">
                                    <FormLabel>Guest City</FormLabel>
                                    <FormControl 
                                        type="text"
                                        value={newestInvite.guestCity}
                                        placeholder="Enter Guest City"
                                        onChange={(event) => this.updateNewestGuest(newestInvite.guestName, event.target.value)}>
                                    </FormControl>
                                </FormGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" 
                                onClick={(event) => { this.saveNewGuest() }}>
                                    Save
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        )}
}

export default CustomGuest;