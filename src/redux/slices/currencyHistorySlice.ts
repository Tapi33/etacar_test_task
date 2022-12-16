import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHistoryCurrency} from "../../types/historyCurrency";

interface ICurrencyHistoryState {
    currencyHistory: IHistoryCurrency[]
}

const initialState: ICurrencyHistoryState = {
    currencyHistory: []
}

export const getCurrencyHistory = createAsyncThunk(
    "/getCurrencyHistory",
    async (id:string | undefined) =>{
        const response  = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
        console.log(response.data.data)
        return response.data.data
    }
)

export const currencyHistorySlice = createSlice({
    name:"currency",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCurrencyHistory.fulfilled,(state, action:PayloadAction<IHistoryCurrency[]>)=>{
            state.currencyHistory = action.payload
        })
    }
})

export const currencyHistoryReducer = currencyHistorySlice.reducer