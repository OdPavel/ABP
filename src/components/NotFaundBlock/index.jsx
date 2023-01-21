import React from 'react';
import styles from './NotFaundBlock.module.css';
import {Link} from "react-router-dom";

const NotFaundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Ничего не найденно</h1>
            <span>😕</span>
            <p>Что бы проверить VIN вернитесь на главную</p>
            <Link to="/" className={styles.link}>
                Главная
            </Link>
        </div>
    );
};

export default NotFaundBlock;