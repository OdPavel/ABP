import React from 'react';
import styles from './Variables.module.css'
import {Link} from 'react-router-dom';
import {AppContext} from '../../App';

const Variables = () => {
    const {allVariables, setAllVariables} = React.useContext(AppContext)

    React.useEffect(() => {
        async function getVariableList() {
            let response = await fetch(` https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`);
            let data = await response.json();
            setAllVariables(data.Results)
        }

        getVariableList()
    },[])

    return (
        <>
            <h1>Variables</h1>
            <table>
                <tbody>
                {allVariables.map((item) => (
                    <tr key={item.ID}>
                        <td><Link className={styles.link} to={item.ID.toString()}>{item.Name}</Link></td>
                        <td dangerouslySetInnerHTML={{__html: item.Description}}/>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Variables;