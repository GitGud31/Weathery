import React from "react";
import { ButtonGroup, Button, FormControl, Form } from "react-bootstrap";
import searchIcon from "../assets/search-icon.svg";

import "../styles/Navbar.css";

function Navbar() {

    return (
        <div className="search-container">

            <Button className="btn-text" >Today</Button>
            <Button className="btn-text" >Week</Button>

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

        </div>
    );
}

export default Navbar;