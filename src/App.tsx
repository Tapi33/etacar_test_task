import React, {FC} from 'react';
import {Header} from "./components/Header";
import {CurrencyInfo} from "./pages/CurrencyInfo";
import {CurrencyList} from "./components/main/CurrencyList";
import {Route, Routes} from "react-router";

export const App:FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/main' element={<CurrencyList />} />
                <Route path='/currency/:id' element={<CurrencyInfo />} />
            </Routes>
        </>
    );
};
