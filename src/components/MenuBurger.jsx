//react
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//icons
import { GoKebabHorizontal, GoKebabVertical } from "react-icons/go";

const BurgerMenu = ({ pageName }) => {
    const [open, setOpen] = useState(false);

    //blur background when open menu
    const toggleMenu = () => {
        setOpen(!open);
        blurBackground();
    };

    //function add blur on background burger menu
    //get class name of the page using props
    //props came from header component
    const blurBackground = () => {
        const page = document.querySelector(`.${pageName}`);

        if (open !== true) {
            page.style.filter = "blur(15px)";
        } else {
            page.style.filter = "inherit";
        }
    };

    return (
        <nav onClick={toggleMenu}>
            <div className="burger-menu-icon">
                <GoKebabVertical
                    onClick={toggleMenu}
                    className={open ? "close" : ""}
                />
            </div>
            <div
                className={open ? "burger-menu" : "close"}
                onClick={toggleMenu}
            >
                <GoKebabHorizontal
                    onClick={toggleMenu}
                    className={open ? "burger-menu-icon-open" : "close"}
                />
                <NavLink to="/menu" className="burger-menu-link">
                    Menu
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className="burger-menu-collapse burger-menu-link"
                >
                    Portfolio
                </NavLink>
                <NavLink to="/contact" className="burger-menu-link">
                    Contact
                </NavLink>
                <NavLink to="/presentation" className="burger-menu-link">
                    Présentation
                </NavLink>
            </div>
        </nav>
    );
};

export default BurgerMenu;
