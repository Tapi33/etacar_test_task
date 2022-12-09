import React from 'react';
import {StyledMainPage, MainPageContent} from '../styles/mainPage';
import {Wrapper} from "../styles/header";
import {CurrencyList} from "../components/main/CurrencyList";

export const MainPage = () => {
    return (
        <StyledMainPage>
            <Wrapper>
                <MainPageContent>
                    <CurrencyList />
                </MainPageContent>
            </Wrapper>
        </StyledMainPage>
    );
};
