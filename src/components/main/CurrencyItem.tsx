import React from 'react';

import {CurrencyItemContent} from "../../styles/currencyItem";
import {CurrencyListInfoItem} from "../../styles/currencyList";
import {useNavigate} from "react-router";


interface ICurrencyItemProps {
    id: string;
    rank: number;
    symbol: string;
    name: string;
    supply: string;
    priceUsd: string;
}

export const CurrencyItem: React.FC<ICurrencyItemProps> = ({id,name, rank, supply, priceUsd, symbol}) => {

    const navigate = useNavigate()
    const selectNavigateToCurrency = (id:string) =>{
        navigate(`/currency/${id}`)
    }

    return (
        <CurrencyItemContent onClick={()=> selectNavigateToCurrency(id)}>
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
