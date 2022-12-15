import React, {FC} from 'react';
import {
    CurrencyPage,
    CurrencyContent,
    CurrencyContentItem,
    CurrencyContentBtn,
    CurrencyWrapper,
    CurrencyContendInfo
} from "../styles/currencyInfo";
import {useAppSelecrot} from "../hooks/hooks";
import {useNavigate, useParams} from "react-router";

export const CurrencyInfo:FC = () => {
    const navigate = useNavigate()
    const {currencies} = useAppSelecrot(state => state.currency)
    const {id} = useParams()
    const selectCurrency = currencies.find((currency)=>currency.id == id)

    const handlerBack = () => navigate('/main')

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
                            Symbol: Bitcoin
                        </CurrencyContentItem>
                        <CurrencyContentItem className={"currency-price"}>
                            Price: 20323$
                        </CurrencyContentItem>
                    </CurrencyContendInfo>
                    <CurrencyContentItem>
                        //График
                    </CurrencyContentItem>
                </CurrencyContent>
            </CurrencyWrapper>
        </CurrencyPage>
    );
};