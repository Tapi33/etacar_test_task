import React from 'react';

import {CurrencyItemContent} from "../../styles/currencyItem";
import {CurrencyListInfoItem} from "../../styles/currencyList";

interface ICurrencyItemProps{
    id: string;
    rank: number;
    symbol: string;
    name: string;
    supply: string;
    priceUsd: string;
}

export const CurrencyItem: React.FC<ICurrencyItemProps> = ({ name, rank, supply, priceUsd, symbol}) => {
    return (
        <CurrencyItemContent>
            <CurrencyListInfoItem>
                {rank}
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                {symbol}
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                {name}
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                {priceUsd}
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                {supply}
            </CurrencyListInfoItem>
            <CurrencyListInfoItem>
                {priceUsd}
            </CurrencyListInfoItem>
        </CurrencyItemContent>
    );
};
