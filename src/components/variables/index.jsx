import React from 'react';

import styles from './Variables.module.css'
import Button from "../UI/Button";


const Variables = () => {
    const [allVariables, setAllVariables] = React.useState([])
    const [oneVariable, setOneVariable] = React.useState([])
    const [id, setId] = React.useState()

    React.useEffect(() => {
        async function fetchRequest() {
            let response = await fetch(` https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`);
            let data = await response.json();
            setAllVariables(data.Results)
        }

        fetchRequest()
    }, [])

    React.useEffect(() => {
        const descriptionVariable = allVariables.find((item) => item.ID === id)
        setOneVariable(descriptionVariable)
    }, [id])

    return (
        <>

            {oneVariable ?
                <>
                    <h1>Variable</h1>
                    <table>
                        <tbody>
                        <tr>
                            <td>GroupName</td>
                            <td>{oneVariable.GroupName}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{oneVariable.Name}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td dangerouslySetInnerHTML={{__html: oneVariable.Description}}/>
                        </tr>
                        </tbody>
                    </table>
                    <Button onClick={() => setId(null)}>
                        Back
                    </Button>
                </>

                :
                <>
                    <h1>Variables</h1>
                    <table>
                        <tbody>
                        {allVariables.map((item) => (
                            <tr key={item.ID} onClick={() => setId(item.ID)}>
                                <td>{item.Name}</td>
                                <td dangerouslySetInnerHTML={{__html: item.Description}}/>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>

            }


        </>

    )


}


export default Variables;