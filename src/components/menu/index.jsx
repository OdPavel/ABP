import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

const Menu = props => {
    return (
        <nav>
            <NavLink to="." end>Home</NavLink>
            <NavLink to="variables">Variables</NavLink>
        </nav>
    );
};

Menu.propTypes = {};

export default Menu;