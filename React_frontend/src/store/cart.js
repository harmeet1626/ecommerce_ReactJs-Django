import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchCart = createAsyncThunk(
    'data/cart', async (userId) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/getCartDetails/?userId=${userId}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }
);


const cart = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export default cart.reducer