import {Routes, Route} from "react-router-dom";
import React from "react";


import './App.css';
import Home from "./components/home/Home";
import Variables from "./components/variables";
import NotFoundBlock from "./components/NotFoundBlock";
import MainLayout from "./components/layouts/MainLayout";
import SingleVariable from "./components/singleVariable";

export const AppContext = React.createContext()


function App() {
    const [allVariables, setAllVariables] = React.useState([])
    return (

        <div className="App">
            <AppContext.Provider value={{allVariables, setAllVariables}}>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="variables" element={<Variables />}/>
                        <Route path="variables/:variableId" element={<SingleVariable/>}/>
                        <Route path="*" element={<NotFoundBlock/>}/>
                    </Route>
                </Routes>
            </AppContext.Provider>

        </div>


    );
}

export default App;
//
