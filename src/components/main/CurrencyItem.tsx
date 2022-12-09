import React from 'react';

import {CurrencyItemContent} from "../../styles/currencyItem";
import {CurrencyListInfoItem} from "../../styles/currencyList";

export const CurrencyItem = () => {
    return (
        <CurrencyItemContent>
            <CurrencyListInfoItem>
                BTc
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                Bitcoin
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                12312
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                1020323
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                321312
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                "f;'ds
            </CurrencyListInfoItem>
        </CurrencyItemContent>
    );
};
