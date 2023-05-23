//react
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink
                to="/menu"
                activeclassname="navbar-active"
                className="navbar-link"
            >
                Menu
            </NavLink>
            <NavLink
                to="/portfolio"
                activeclassname="navbar-active"
                className="navbar-collapse navbar-link navbar-link--portfolio"
            >
                Portfolio
            </NavLink>
            <NavLink
                to="/contact"
                activeclassname="navbar-active"
                className="navbar-link"
            >
                Contact
            </NavLink>
            <NavLink
                to="/presentation"
                activeclassname="navbar-active"
                className="navbar-link"
            >
                Présentation
            </NavLink>
        </nav>
    );
};

export default NavBar;
