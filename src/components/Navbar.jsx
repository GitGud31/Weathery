import React from "react";
import { Nav, Navbar, Form, FormControl, Button, ButtonGroup } from "react-bootstrap";

import "../styles/Navbar.css";
import searchIcon from "../assets/search-icon.svg"


function NavBar() {

    return (

        <Navbar className="custom-navbar" sticky="top" expand="sm">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">

                    <Nav.Link className="navbar-link-text" href="#">Today</Nav.Link>
                    <Nav.Link className="navbar-link-text" href="#">Week</Nav.Link>

                    <Form inline>
                        <FormControl
                            className="search-bar"
                            collapseOnSelect
                            type="text"
                            placeholder="Search for a place..." />

                        <Button className="btn-submit" type="submit">
                            <img src={searchIcon} alt="" />
                        </Button>
                    </Form>

                    <ButtonGroup className="btn-grp-temp">
                        <Button className="btn-temp" size="sm" >C°</Button>
                        <Button className="btn-temp" size="sm" >F°</Button>
                    </ButtonGroup>
                </Nav>

            </Navbar.Collapse>

        </Navbar>

    );
}

export default NavBar;