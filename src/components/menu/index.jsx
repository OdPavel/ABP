import React from 'react';
import styles from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {

    return (
        <nav className={styles.nav}>
            <NavLink to="." end>Home</NavLink>
            <NavLink to="variables">Variables</NavLink>
        </nav>
    );
};

export default Menu;