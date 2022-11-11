import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.loading = true;

        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [addContact.pending]: (state) => {
            state.loading = true;
        },
        [addContact.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.unshift(action.payload);
        },
        [addContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [deleteContact.pending]: (state) => {
            state.loading = true;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        [deleteContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default contactsSlice.reducer;