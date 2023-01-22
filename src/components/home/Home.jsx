import React from "react";
import Form from "../form";
import ListItem from "../listItem";
import RenderLastVin from "../renderLastVin";

const Home = () => {

    const [loading, setLoading] = React.useState(false)
    const [vinDecoding, setVinDecoding] = React.useState([])
    const [messageId, setMessageId] = React.useState('')
    const [vinNum, setVinNum] = React.useState('')
    const [vinFromStorage, setVinFromStorage] = React.useState([])
    const LOCAL_STORAGE_KEY_NAME = 'vinCodes'

     const savingToStorage = (vin) => {
        const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME));
        const arrVinCodes = savedData ? savedData : [];
        if (arrVinCodes.length === 5) {
            arrVinCodes.shift()
            arrVinCodes.push(vin)
        } else {
            arrVinCodes.push(vin)
        }
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(arrVinCodes))
    }

    React.useEffect(() => {
        const arrFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME))
        setVinFromStorage(arrFromLocalStorage)
    }, [vinNum])

    async function getInfoById(vin) {
        setLoading(true)
        savingToStorage(vin)
        try {
            let response = await fetch(` https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
            let decodingVinNum = await response.json();
            setMessageId(decodingVinNum.Message)
            setVinNum(decodingVinNum.SearchCriteria)
            setVinDecoding(decodingVinNum.Results)

        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    const onClickHandler = (vin) =>{
        getInfoById(vin)
    }

    return (
        <>
            <h1>Проверка Вашего VIN кода</h1>
            <h2>{messageId}</h2>
            <Form vin={(vin) => getInfoById(vin)}/>
            {vinFromStorage !==null ? <RenderLastVin onClick={onClickHandler} arrLastVin={vinFromStorage}/> : ''}
            {!!loading && <h2>Идет загрузка, подождите пожалуйста</h2>}
            {!!vinDecoding && <ListItem arr={vinDecoding} title={vinNum}/>}
        </>
    );
}


export default Home;