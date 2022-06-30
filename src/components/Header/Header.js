import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="inner__header">
                <div className="header__content">
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                Power Hack
                            </Navbar.Brand>
                            <Navbar.Toggle
                                aria-controls="power_nav"
                            />
                            <Navbar.Collapse id="power_nav">
                                <Nav className="ms-auto">
                                    <p className="text-white me-3 pt-2" as={Link} to="#home">Paid Total: 0</p>
                                    <Nav.Link className="text-white me-3" as={Link} to="#link">Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div >
    );
};

export default Header;