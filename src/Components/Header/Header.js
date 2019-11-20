import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = props => (

    <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand className={props.scroll ? 'scrolled brand hover-text' : 'not-scrolled brand hover-text'} >The Quadrant Event</Navbar.Brand>
        <Nav>
            <Link to="/CustomGuest" className="text-white text-decoration-none hover-text">Add Custom Guest</Link>
        </Nav>
    </Navbar>
    
);

export default Header;
