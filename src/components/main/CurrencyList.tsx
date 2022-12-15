import React, {useEffect} from 'react';

import {CurrencyListContent,CurrencyListInfo, CurrencyListInfoItem} from "../../styles/currencyList";
import {CurrencyItem} from "./CurrencyItem";
import {Modal} from "../Modal";
import {useAppDispatch, useAppSelecrot} from "../../hooks/hooks";
import {getCurrency} from "../../redux/slices/currencySlice";

export const CurrencyList = () => {
    const dispatch = useAppDispatch()
    const currencies = useAppSelecrot(state => state.currency.currencies)



    useEffect(()=>{
        dispatch(getCurrency())
    },[])


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
            {
                currencies.map((currency)=>(
                    <CurrencyItem key={currency.id} {...currency} />
                ))
            }
        </CurrencyListContent>
    );
};
