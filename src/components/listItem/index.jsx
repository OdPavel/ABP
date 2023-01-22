import React from 'react';
import styles from './ListItem.module.css'
import PropTypes from 'prop-types';


const ListItem = ({arr, title}) => {
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <table>
                <tbody>
                {arr.map((item) => (
                    item.Value &&
                    <tr key={item.VariableId}>
                        <td>{item.Variable}</td>
                        <td>{item.Value}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </React.Fragment>
    );
};

ListItem.propTypes = {
    arr: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default ListItem;