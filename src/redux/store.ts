import {configureStore} from "@reduxjs/toolkit";
import {currencyReducer} from "./slices/currencySlice";
import {currencyHistoryReducer} from "./slices/currencyHistorySlice";
import {currencyPortfolioReducer} from "./slices/currencyPortfolioSlice";


export const store = configureStore({
    reducer:{
        currency: currencyReducer,
        currencyHistory:currencyHistoryReducer,
        currencyPortfolio:currencyPortfolioReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;