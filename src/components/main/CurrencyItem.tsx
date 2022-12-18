import React, {useState} from 'react';

import {CurrencyItemContent} from "../../styles/currencyItem";
import {CurrencyListInfoItem} from "../../styles/currencyList";
import {useNavigate} from "react-router";
import {ICurrency} from "../../types/currency";
import {Modal} from "../Modal";


interface ICurrencyItemProps {
    currency: ICurrency
}

export const CurrencyItem: React.FC<ICurrencyItemProps> = ({currency}) => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const selectNavigateToCurrency = (id: string) => {
        navigate(`/currency/${id}`)
    }
    const handlerAdd = (e: React.MouseEvent) => {
        e.stopPropagation()
        setActiveModal(!activeModal);
    }

    return (
        <>
            <CurrencyItemContent onClick={() => selectNavigateToCurrency(currency.id)}>
                <CurrencyListInfoItem>
                    {currency.rank}
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    {currency.symbol}
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    {currency.name}
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    {currency.priceUsd}
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    {currency.supply}
                </CurrencyListInfoItem>
                <CurrencyListInfoItem>
                    {currency.priceUsd}
                </CurrencyListInfoItem>
                <CurrencyListInfoItem onClick={handlerAdd}>
                    +
                </CurrencyListInfoItem>
            </CurrencyItemContent>
            {activeModal && (
                <Modal setActiveModal={setActiveModal} selectCurrency={currency}/>
            )}
        </>

    );
};
