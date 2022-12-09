import React, {FC} from 'react';
import {
    CurrencyPage,
    CurrencyContent,
    CurrencyContentItem,
    CurrencyContentBtn,
    CurrencyWrapper,
    CurrencyContendInfo
} from "../styles/currencyInfo";

export const CurrencyInfo:FC = () => {
    return (
        <CurrencyPage>
            <CurrencyWrapper>
                <CurrencyContent>
                    <CurrencyContentItem>
                        <CurrencyContentBtn>
                            Добавить
                        </CurrencyContentBtn>
                        <CurrencyContentBtn>
                            Назад
                        </CurrencyContentBtn>
                    </CurrencyContentItem>
                    <CurrencyContendInfo>
                        <CurrencyContentItem>
                            Name: Bitcoin
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