import React from "react";
import SwitchModeButton from "./SwitchModeButton";
import NavBar from "./NavBar";
import MenuBurger from "./MenuBurger";
import { useLocation } from "react-router-dom";

const Header = () => {
    //get url path using useLocation hook
    //path name is push in array and transform to strings
    //the "/" is removed from the array
    //array content is stringified
    //new string is pass as prop to be used in burger-menu component
    const location = useLocation();
    const pathName = location.pathname;
    const array = [];

    array.push(pathName.split(""));
    array[0].shift();
    array.push(array[0].join(""));
    array.shift();
    const pageName = array.toString();

    return (
        <div className="header">
            <NavBar />
            <MenuBurger pageName={pageName} />
            <SwitchModeButton />
        </div>
    );
};

export default Header;
