import React from "react";
import axios from "axios";
import Form from "../form";
import styles from './Home.module.css'
import ListItem from "../listItem";
import RenderLastVin from "../renderLastVin";

const Home = () => {

    const [loading, setLoading] = React.useState(false)
    const [vinDecoding, setVinDecoding] = React.useState([])
    const [vinNum, setVinNum] = React.useState('')
    const [vinFromStorage, setVinFromStorage] = React.useState([])
    const vinCode = 'arrVinCodes'

    const savingToStorage = (vin) => {
        const savedData = JSON.parse(localStorage.getItem(vinCode));
        const arrVinCodes = savedData ? savedData : [];
        if (arrVinCodes.length === 5) {
            arrVinCodes.shift()
            arrVinCodes.push(vin)
        } else {
            arrVinCodes.push(vin)
        }
        localStorage.setItem(vinCode, JSON.stringify(arrVinCodes))
    }

    React.useEffect(() => {
        const arrFromLocalStorage = JSON.parse(localStorage.getItem(vinCode))
        setVinFromStorage(arrFromLocalStorage)
    }, [vinNum])

    async function fetchRequest(vin) {
        setLoading(true)
        savingToStorage(vin)
        try {
            let response = await fetch(` https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
            let decodingVinNum = await response.json();
            setVinNum(decodingVinNum.SearchCriteria)
            setVinDecoding(decodingVinNum.Results)

        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    const onClickHandler = (vin) =>{
        // console.log(vin)
        fetchRequest(vin)
    }

    return (
        <>
            <Form vin={(vin) => fetchRequest(vin)}/>
            {vinFromStorage !==null ? <RenderLastVin onClick={onClickHandler} arrLastVin={vinFromStorage}/> : ''}
            {!!loading && <h2>Идет загрузка, подождите пожалуйста</h2>}
            {!!vinDecoding && <ListItem arr={vinDecoding} title={vinNum}/>}
        </>
    );
}


export default Home;