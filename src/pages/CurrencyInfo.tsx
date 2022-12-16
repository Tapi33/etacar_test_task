import React, {FC, useEffect} from 'react';
import {
    CurrencyPage,
    CurrencyContent,
    CurrencyContentItem,
    CurrencyContentBtn,
    CurrencyWrapper,
    CurrencyContendInfo
} from "../styles/currencyInfo";
import {useAppDispatch, useAppSelecrot} from "../hooks/hooks";
import {useNavigate, useParams} from "react-router";
import {LineChart} from "../components/lineChart";
import {getCurrencyHistory} from "../redux/slices/currencyHistorySlice";

export const CurrencyInfo:FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {currencies} = useAppSelecrot(state => state.currency)
    const {currencyHistory} = useAppSelecrot(state => state.currencyHistory)
    const {id} = useParams()
    const selectCurrency = currencies.find((currency)=>currency.id == id)

    const handlerBack = () => navigate('/main')

    useEffect(()=>{
        dispatch(getCurrencyHistory(id))
    },[])

    return (
        <CurrencyPage>
            <CurrencyWrapper>
                <CurrencyContent>
                    <CurrencyContentItem>
                        <CurrencyContentBtn>
                            Добавить
                        </CurrencyContentBtn>
                        <CurrencyContentBtn onClick={()=> handlerBack()}>
                            Назад
                        </CurrencyContentBtn>
                    </CurrencyContentItem>
                    <CurrencyContendInfo>
                        <CurrencyContentItem>
                            Name: {selectCurrency?.name}
                        </CurrencyContentItem>
                        <CurrencyContentItem>
                            Symbol: {selectCurrency?.symbol}
                        </CurrencyContentItem>
                        <CurrencyContentItem className={"currency-price"}>
                            Price: {Number(selectCurrency?.priceUsd).toFixed(3)}$
                        </CurrencyContentItem>
                    </CurrencyContendInfo>
                    <CurrencyContentItem>
                        <LineChart history={currencyHistory} />
                    </CurrencyContentItem>
                </CurrencyContent>
            </CurrencyWrapper>
        </CurrencyPage>
    );
};