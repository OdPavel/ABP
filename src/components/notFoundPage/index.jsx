import React from 'react';
import styles from './NotFoundBlock.module.css';
import {Link} from 'react-router-dom';

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Ничего не найдено</h1>
            <span>😕</span>
            <p>Что бы проверить VIN вернитесь на главную</p>
            <Link to="/" className={styles.link}>
                Главная
            </Link>
        </div>
    );
};

export default NotFoundBlock;