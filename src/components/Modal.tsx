import React, {ChangeEvent, FC, useState} from 'react';

import {CurrencyModal, CurrencyModalContent,CurrencyModalItem, CurrencyModalInput, CurrencyMoadlBtn} from "../styles/modal";
import {ICurrency} from "../types/currency";
import {useAppDispatch} from "../hooks/hooks";
import {addCurrencyToPortfolio} from "../redux/slices/currencyPortfolioSlice";

interface IModalProps {
    setActiveModal: (value: boolean) => void,
    selectCurrency: ICurrency | undefined
}

export const Modal: FC<IModalProps> = ({setActiveModal, selectCurrency}) => {
    const dispatch = useAppDispatch()

    const [valueCount, setValueCount] = useState<string>("");

    const onChangeValue = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setValueCount(e.target.value);
    }

    const addPortfolio = () => {
        if(selectCurrency){
            dispatch(addCurrencyToPortfolio( {
                id:selectCurrency.id,
                name: selectCurrency.name,
                price: selectCurrency.priceUsd,
                count:valueCount,
            }))
        }
    }

    return (
        <CurrencyModal onClick={() => setActiveModal(false)}>
            <CurrencyModalContent onClick={(e) => e.stopPropagation()}>
                <CurrencyModalItem>{selectCurrency?.id}</CurrencyModalItem>
                <CurrencyModalItem>{selectCurrency?.name}</CurrencyModalItem>
                <CurrencyModalItem>{selectCurrency?.priceUsd}</CurrencyModalItem>
                <CurrencyModalInput
                    value={valueCount}
                    onChange={(e)=>onChangeValue(e)}
                    autoFocus={true}
                    placeholder={"Count"}
                />
                <CurrencyMoadlBtn onClick={addPortfolio}>Add</CurrencyMoadlBtn>
            </CurrencyModalContent>
        </CurrencyModal>
    );
};
