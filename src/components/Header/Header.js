import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const Header = () => {
    const [total, setTotal] = useState(0);

    const { data, refetch } = useQuery('billing-list', () => (
        fetch('https://nmk-power-hack.herokuapp.com/billing-list')
            .then(res => res.json())

    ))

    useEffect(() => {
        let total = 0;
        data?.forEach(item => {
            total = total + parseInt(item.paidAmount);
            setTotal(total)
            refetch();
        })
    }, [data, refetch])

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
                                    <p className="text-white me-3 pt-2" as={Link} to="#home">Paid Total: {total}</p>
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