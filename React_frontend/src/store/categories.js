import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        // const response = await axios.get('http://127.0.0.1:8000/categories/')
        return response.data;
    } catch (error) {
        throw error;
    }
});

// Create a slice to handle the reducer and actions
const categories = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (category) => {
        category
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log('rejected')
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default categories.reducer;
