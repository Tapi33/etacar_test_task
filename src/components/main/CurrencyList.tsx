import React from 'react';

import {CurrencyListContent,CurrencyListInfo, CurrencyListInfoItem} from "../../styles/currencyList";
import {CurrencyItem} from "./CurrencyItem";
import {Modal} from "../Modal";

export const CurrencyList = () => {
    return (
        <CurrencyListContent>
            <Modal />
            <CurrencyListInfo>
                <CurrencyListInfoItem>
                    Name
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    Name
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    Name
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    Name
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    Name
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    Name
                </CurrencyListInfoItem>
            </CurrencyListInfo>
            <CurrencyItem/>
        </CurrencyListContent>
    );
};
