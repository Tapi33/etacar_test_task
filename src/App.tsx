import React, {FC} from 'react';
import {Header} from "./components/Header";
import {CurrencyInfo} from "./pages/CurrencyInfo";

export const App:FC = () => {
    return (
        <>
            <Header />
            <CurrencyInfo/>
        </>
    );
};
