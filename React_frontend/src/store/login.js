import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
const initialState = {
    user_id: null,
    auth: false,
    data: null,
    error: null,
};


export const fetchLogin = createAsyncThunk(
    "fetch/login",
    async (payload) => {
        try {
            // const response = await fetch('https://dummyjson.com/auth/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     // body: JSON.stringify({
            //     //     username: payload.username,
            //     //     password: payload.password,
            //     // }),
            //     body: JSON.stringify({
            //         username: 'kminchelle',
            //         password: '0lelplR',
            //     }),
            // });
            const apiUrl = process.env.REACT_APP_API_KEY
            const response = await fetch(`${apiUrl}/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: payload.username,
                    password: payload.password,
                }),
            });

            if (response.ok) {
                toast.success('logged in!')
                const data = await response.json();
                return data

            } else {
                toast.error('check the creadentials.')
                throw new Error('Failed to fetch data');
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
);

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('token')
            state.user_id = null
        },
        checkAuth(state) {
            const token = localStorage.getItem('token')
            if (token) {
                const decoded = jwtDecode(token)
                if (decoded?.user_id) {
                    state.user_id = decoded.user_id
                } else {
                    return
                }
            } else {
                return
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.user_id = action.payload.user_id
                localStorage.setItem('token', action.payload.access_token)
                state.status = "succeeded";
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default loginSlice.reducer;
export const { logout, checkAuth } = loginSlice.actions
