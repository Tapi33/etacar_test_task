import React, {FC} from 'react';
import {Header} from "./components/Header";
import {CurrencyInfo} from "./pages/CurrencyInfo";
import {CurrencyList} from "./components/main/CurrencyList";

export const App:FC = () => {
    return (
        <>
            <Header />
            <CurrencyList/>
        </>
    );
};
