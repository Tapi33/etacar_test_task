import React, {FC} from 'react';
import {Header} from "./components/Header";
import {MainPage} from "./pages/MainPage";

export const App:FC = () => {
    return (
        <>
            <Header />
            <MainPage/>
        </>
    );
};
