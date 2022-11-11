import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, current } from "./auth-operation";

const initialState = {
    user: {},
    token: null,
    isLogin: false,
    loading: false,
    isLoadingUser: false,
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
        },

        [logout.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [logout.fulfilled]: (state) => {
            state.loading = false;
            state.user = {};
            state.token = null;
            state.isLogin = false;
        },
        [logout.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

        [current.pending]: (state) => {
            state.isLoadingUser = true;
            state.error = null;
        },
        [current.fulfilled]: (state, {payload}) => {
            state.isLoadingUser = false;
            state.user = payload;
            state.isLogin = true;
        },
        [current.rejected]: (state, {payload}) => {
            state.isLoadingUser = false;
            state.error = payload;
        },
    },
})

export default authSlice.reducer;