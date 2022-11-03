import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/api/authAPI";

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
)