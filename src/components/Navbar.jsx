import React from "react";
import { ButtonGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import searchIcon from "../assets/search-icon.svg";

import "../styles/Navbar.css";

function Navbar() {

    return (
        <div className="search-container">

            <ButtonGroup className="btn-grp">
                <Button className="btn-text" >Today</Button>
                <Button className="btn-text" >Week</Button>
            </ButtonGroup>

            <InputGroup className="search-bar">
                <FormControl
                    type="text"
                    placeholder="Search for a place..."
                />
                <InputGroup.Append>
                    <Button className="btn-submit" type="submit">
                        <img src={searchIcon} alt="" />
                    </Button>
                </InputGroup.Append>
            </InputGroup>



        </div>
    );
}

export default Navbar;