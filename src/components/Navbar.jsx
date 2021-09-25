import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

import "../styles/Navbar.css";


function NavBar() {

    return (

        <Navbar className="custom-navbar" sticky="top" expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse>
                <Nav className="m-auto">

                    <Nav.Link href="#">Today</Nav.Link>
                    <Nav.Link href="#">Week</Nav.Link>
                    <Form inline>
                        <FormControl
                            className="search-bar"
                            collapseOnSelect
                            type="text"
                            placeholder="Search" />
                        <Button type="submit">Ok</Button>
                    </Form>

                    <Button type="submit">C°</Button>
                    <Button type="submit">F°</Button>
                </Nav>


            </Navbar.Collapse>

        </Navbar>

    );
}

export default NavBar;