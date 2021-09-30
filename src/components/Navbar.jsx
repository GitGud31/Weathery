import React, { useState } from "react";
import { Link } from "react-scroll";
import { ButtonGroup, Button, FormControl, InputGroup } from "react-bootstrap";
import searchIcon from "../assets/search-icon.svg";

import "../styles/Navbar.css";

function Navbar(props) {

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const submitHandler = () => {

        /* Checking for empty spaces */
        if (input.replace(/\s/g, "") !== "") {
            props.onSubmitHandle(input);
        }
    }

    return (
        <div className="search-container">

            <ButtonGroup className="btn-grp">
                <Link
                    duration={800}
                    smooth={true}
                    /* offset={-50} */
                    to="home-section">
                    <Button className="btn-text" >Today</Button>
                </Link>

                <Link
                    duration={800}
                    smooth={true}
                    to="week-section">
                    <Button className="btn-text" >Week</Button>
                </Link>
            </ButtonGroup>

            <InputGroup className="search-bar">
                <FormControl
                    type="text"
                    placeholder="Search for a place..."
                    value={input}
                    onChange={handleChange}
                />
                <InputGroup.Append>
                    <Button
                        onClick={submitHandler}
                        className="btn-submit" type="submit">
                        <img src={searchIcon} alt="" />
                    </Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    );
}

export default Navbar;