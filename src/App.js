import {Routes, Route} from "react-router-dom";


import './App.css';
import Home from "./components/home/Home";
import Variables from "./components/variables";
import NotFaundBlock from "./components/NotFaundBlock";
import MainLayout from "./components/layouts/MainLayout";

function App() {
    return (

        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="variables" element={<Variables/>}/>
                    <Route path="*" element={<NotFaundBlock/>}/>
                </Route>


            </Routes>
        </div>


    );
}

export default App;
//
<h1>Проверка Вашего VIN кода</h1>