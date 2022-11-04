import { createSlice } from "@reduxjs/toolkit";
import { signup, login } from "./auth-operation";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [signup.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        },
        [signup.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

        [login.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [login.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        },
        [login.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    },
})

export default authSlice.reducer;