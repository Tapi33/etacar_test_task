import {IPortfolio} from "../../types/portfolio";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CurrencyPortfolio {
    currencies: IPortfolio[]
}

const storagePortfolio = localStorage.getItem("portfolio");

const initialState: CurrencyPortfolio = {
    currencies: storagePortfolio ? JSON.parse(storagePortfolio) : []
}


const currencyPortfolioSlice = createSlice({
    initialState,
    name: "portfolio",
    reducers: {
        addCurrencyToPortfolio: (state, action: PayloadAction<IPortfolio>) => {
            const selectCurrency = state.currencies.find((e) => e.id === action.payload.id)
            console.log(state.currencies)
            if (selectCurrency) {
                selectCurrency.count += action.payload.count
                console.log(1)
            } else {
                state.currencies = [...state.currencies, action.payload];
                console.log(2)
            }
            localStorage.setItem("portfolio", JSON.stringify(state))
        },
    }
})

export const currencyPortfolioReducer = currencyPortfolioSlice.reducer;
export const {addCurrencyToPortfolio} = currencyPortfolioSlice.actions;