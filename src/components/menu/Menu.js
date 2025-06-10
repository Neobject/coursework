import React from 'react';
import { Navbar, Container } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar>
            <Container>
              
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
