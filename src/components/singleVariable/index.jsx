import React from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import styles from './SingleVariable.module.css'
import {AppContext} from "../../App";

const SingleVariable = props => {
    const params = useParams()
    const {allVariables} = React.useContext(AppContext)
    const id = params.variableId

    const descriptionVariable = allVariables.find((item) => item.ID === +id)


    return (
        <div>
            <h1>Single variable Info</h1>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <td>GroupName</td>
                    <td>{descriptionVariable.GroupName}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{descriptionVariable.Name}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td dangerouslySetInnerHTML={{__html: descriptionVariable.Description}}/>
                </tr>
                </tbody>
            </table>
            <Link to='/variables' className={styles.link}>Back to variables</Link>
        </div>
    );
};

export default SingleVariable;