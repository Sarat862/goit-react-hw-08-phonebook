import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/api/authAPI";

import { toast } from 'react-toastify';

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch ({ response }) {
            toast.error("You have entered invalid data, please try again");
            const error = {
                status: response.status,
                statusText: response.statusText,
            }
            return rejectWithValue(error); 
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.login(data);
            return result;
        } catch ({ response }) {
            toast.error("You have entered invalid data, please try again");
            const error = {
                status: response.status,
                statusText: response.statusText,
            }
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await api.logout();
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                statusText: response.statusText,
            }
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            if (auth.token === null) {
                return rejectWithValue();
            }
            const result = await api.getCurrentUser(auth.token);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                statusText: response.statusText,
            }
            return rejectWithValue(error);
        }
    }
)