import axios from "axios";
import {ICurrency} from "../../types/currency";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICurrencyState {
    currencies: ICurrency[]
}

const initialState: ICurrencyState = {
    currencies: []
}

export const getCurrency = createAsyncThunk(
    "/getCurrency",
    async () =>{
        const response  = await axios.get("https://api.coincap.io/v2/assets?limit=15")
        console.log(response.data.data)
        return response.data.data
    }
)

export const currencySlice = createSlice({
    name:"currency",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCurrency.fulfilled,(state, action:PayloadAction<ICurrency[]>)=>{
            state.currencies = action.payload
        })
    }
})

export const currencyReducer = currencySlice.reducer