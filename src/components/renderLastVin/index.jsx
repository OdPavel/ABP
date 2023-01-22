import React from 'react';
import PropTypes from 'prop-types';
import styles from './RenderLastVin.module.css'

const RenderLastVin = ({arrLastVin, onClick}) => {

    return (
        <div className={styles.root}>
            {arrLastVin.map((item, index) => <p onClick={() => onClick(item)} className={styles.text}
                                                key={index}>{item}</p>)}

        </div>
    );
};

RenderLastVin.propTypes = {
    arrLastVin: PropTypes.array,
    onClick: PropTypes.func
};

export default RenderLastVin;
